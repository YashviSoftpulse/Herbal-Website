import {Await, useLoaderData} from '@remix-run/react';
import {AnalyticsPageType, flattenConnection} from '@shopify/hydrogen';
import {defer} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {
  Hero,
  NewArrival,
  OurCollection,
  BestSeller,
  ImgBanner,
  HelthBanner,
  ReviewSection,
  Banner,
} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '../data/fragments';
import {seoPayload} from '~/lib/seo.server';
import {Newsletter} from '~/components/Newsletter';

const BLOG_HANDLE = 'news';

export async function loader({request, params, context}) {
  const {language, country} = context.storefront.i18n;

  const {blog} = await context.storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: BLOG_HANDLE,
    },
  });

  if (!blog?.articles) {
    throw new Response('Not found', {status: 404});
  }

  const articles = flattenConnection(blog.articles).map((article) => {
    const {publishedAt} = article;
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat(`${language}-${country}`, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(publishedAt)),
    };
  });

  const seoblog = seoPayload.blog({blog, url: request.url});
  const collectionHandle = 'new-arrival';

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    throw new Response(null, {status: 404});
  }

  const {shop, hero} = await context.storefront.query(HOMEPAGE_SEO_QUERY, {
    variables: {handle: 'freestyle'},
  });

  const seo = seoPayload.home();

  return defer({
    articles,
    seoblog,
    shop,
    collection: context.storefront.query(SINGLE_COLLECTION_QUERY, {
      variables: {
        handle: collectionHandle,
        country,
        language,
      },
    }),

    featuredProducts: context.storefront.query(
      HOMEPAGE_FEATURED_PRODUCTS_QUERY,
      {
        variables: {
          country,
          language,
        },
      },
    ),
    featuredCollections: context.storefront.query(FEATURED_COLLECTIONS_QUERY, {
      variables: {
        country,
        language,
      },
    }),

    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
  });
}

export default function HomePage() {
  

  return (
    <>
      <Hero />
      <OurCollection />
      <NewArrival />
      <Banner />
      <ImgBanner />
      <BestSeller />
      <HelthBanner />
      <ReviewSection />
      <Newsletter />
    </>
  );
}

// @see: https://shopify.dev/api/storefront/2023-07/queries/collections
export const FEATURED_COLLECTIONS_QUERY = `#graphql
  query homepageFeaturedCollections {
    collections(
      first: 10,
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

const COLLECTION_CONTENT_FRAGMENT = `#graphql
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

const HOMEPAGE_SEO_QUERY = `#graphql
  query seoCollectionContent($handle: String)
   {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
  ${COLLECTION_CONTENT_FRAGMENT}
`;

// @see: https://shopify.dev/api/storefront/2023-07/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  query homepageFeaturedProducts{
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

const SINGLE_COLLECTION_QUERY = `#graphql
query getCollectionByHandle($handle: String!){
  collection(handle: $handle) {
    id
    title
    handle
    products(first: 10) {
      nodes {
        id
        title
        publishedAt
        handle
        vendor
        variants(first: 1) {
          nodes {
            id
            availableForSale
            image {
              url
              altText
              width
              height
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            product {
              handle
              title
            }
          }
        }
      }
    }
  }
}
`;

const BLOGS_QUERY = `#graphql
query Blog($blogHandle: String!){
  blog(handle: $blogHandle ) {
    title
    seo {
      title
      description
    }
    articles(first: 3) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
}

fragment Article on Article  {
  author: authorV2 {
    name
  }
  contentHtml
  handle
  id
  image {
    id
    altText
    url
    width
    height
  }
  publishedAt
  title
}
`;
