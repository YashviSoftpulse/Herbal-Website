import {json} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from '@remix-run/react';
import {
  flattenConnection,
  AnalyticsPageType,
  Pagination,
  getPaginationVariables,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {SortFilter, ProductCard, FilterDrawer} from '~/components';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {routeHeaders} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';
import {getImageLoadingPriority} from '~/lib/const';
// import colPageImg from '../img/women-coll.jpg';
// import filterIcn from '../img/filter-icon-11.png';
import {useEffect, useState} from 'react';
export const headers = routeHeaders;

export async function loader({params, request, context}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });
  const {collectionHandle} = params;

  invariant(collectionHandle, 'Missing collectionHandle param');

  const searchParams = new URL(request.url).searchParams;
  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const {sortKey, reverse} = getSortValuesFromParam(searchParams.get('sort'));
  const filters = [];
  const appliedFilters = [];

  for (const [key, value] of searchParams.entries()) {
    if (available === key) {
      filters.push({available: value === 'true'});
      appliedFilters.push({
        label: value === 'true' ? 'In stock' : 'Out of stock',
        urlParam: {
          key: available,
          value,
        },
      });
    } else if (knownFilters.includes(key)) {
      filters.push({[key]: value});
      appliedFilters.push({label: value, urlParam: {key, value}});
    } else if (key.includes(variantOption)) {
      const [name, val] = value.split(':');
      filters.push({variantOption: {name, value: val}});
      appliedFilters.push({label: val, urlParam: {key, value}});
    }
  }

  // Builds min and max price filter since we can't stack them separately into
  // the filters array. See price filters limitations:
  // https://shopify.dev/custom-storefronts/products-collections/filter-products#limitations
  if (searchParams.has('minPrice') || searchParams.has('maxPrice')) {
    const price = {};
    if (searchParams.has('minPrice')) {
      price.min = Number(searchParams.get('minPrice')) || 0;
      appliedFilters.push({
        label: `Min: $${price.min}`,
        urlParam: {key: 'minPrice', value: searchParams.get('minPrice')},
      });
    }
    if (searchParams.has('maxPrice')) {
      price.max = Number(searchParams.get('maxPrice')) || 0;
      appliedFilters.push({
        label: `Max: $${price.max}`,
        urlParam: {key: 'maxPrice', value: searchParams.get('maxPrice')},
      });
    }
    filters.push({
      price,
    });
  }

  const {collection, collections} = await context.storefront.query(
    COLLECTION_QUERY,
    {
      variables: {
        ...paginationVariables,
        handle: collectionHandle,
        filters,
        sortKey,
        reverse,
      },
    },
  );

  if (!collection) {
    throw new Response('collection', {status: 404});
  }

  const seo = seoPayload.collection({collection, url: request.url});

  return json({
    collection,
    appliedFilters,
    collections: flattenConnection(collections),
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
    seo,
  });
}

export default function Collection() {
  const {collection, collections, appliedFilters} = useLoaderData();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const items = [
    {label: 'Featured', key: 'featured'},
    {
      label: 'Price: Low - High',
      key: 'price-low-high',
    },
    {
      label: 'Price: High - Low',
      key: 'price-high-low',
    },
    {
      label: 'Best Selling',
      key: 'best-selling',
    },
    {
      label: 'Newest',
      key: 'newest',
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const activeItem = items.find((item) => item.key === params.get('sort'));

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    navigateToSort(selectedSortOption);
  };

  const navigateToSort = (selectedSortOption) => {
    const newUrl = getSortLink(selectedSortOption);
    navigate(newUrl);
  };

  const getSortLink = (sort) => {
    const params = new URLSearchParams(location.search);
    params.set('sort', sort);
    return `${location.pathname}?${params.toString()}`;
  };

  console.log('collection', collection);

  return (
    <div className="collection-page">
      <div className="breadcrumb">
        <div className="container">
          <span>
            <a href="/">Home</a>
          </span>
          <span>products</span>
        </div>
      </div>
      <div className="cllctn-page-in pb-60">
        <div className="container">
          <h2 className="page-title text-up text-center">{collection.title}</h2>
          <span className="filter_icon">
            {/* <img
              src={filterIcn}
              alt="filter icon"
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            /> */}
          </span>
          <div className="filter_sort">
            <h6 className="filter-label">
              <label htmlFor="SortBy">Sort by:</label>
            </h6>
            <div className="select">
              <select
                id="sortSelect"
                value={activeItem ? activeItem.key : ''}
                onChange={handleSortChange}
              >
                {items.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon icon-caret"
                viewBox="0 0 10 6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          {filterDrawerOpen && (
            <FilterDrawer
              filters={collection.products.filters}
              appliedFilters={appliedFilters}
              collection={collection}
              filterDrawerOpen={filterDrawerOpen}
              setFilterDrawerOpen={setFilterDrawerOpen}
            />
          )}

          <div
            className={`drawer-overlay  ${filterDrawerOpen ? 'active' : ''}`}
            onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
          ></div>
          <div className="row m-15">
            <SortFilter
              filters={collection.products.filters}
              appliedFilters={appliedFilters}
              collections={collections}
            />

            <Pagination connection={collection.products}>
              {({nodes, isLoading, PreviousLink, NextLink, pageInfo}) => (
                <div className="cllctn-list">
                  <div className="row m-15">
                    {nodes.length > 0 ? (
                      nodes.map((product, i) => (
                        <ProductCard
                          key={product.id}
                          loading={getImageLoadingPriority(i)}
                          product={product}
                        />
                      ))
                    ) : (
                      <p className="text-center no_product">
                        There are no products in this collection.
                      </p>
                    )}
                  </div>
                  <div className="pagination dfx flxcntr flxwrp">
                    <span className="pager-prev">
                      <PreviousLink>
                        <button className="btn">Previous</button>
                      </PreviousLink>
                    </span>

                    <span className="pager-next">
                      <NextLink>
                        <button className="btn">Load More</button>
                      </NextLink>
                    </span>
                  </div>
                </div>
              )}
            </Pagination>
          </div>
        </div>
      </div>

      <div className="image-i1-text im1t-xs dfx flxancntr p-60">
        {/* <img src={colPageImg} /> */}
        <div className="container">
          <h2 className="text-white text-up">Shop our Women collection</h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <a href="/collections" className="btn btn-white btn-col">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

function getSortValuesFromParam(sortParam) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      };
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      };
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      };
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      };
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      };
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      };
  }
}
