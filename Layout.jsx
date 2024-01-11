import logo from '../image/logo.png';
import Cross from '../image/cross.png';
import Cartp1 from '../image/cartp1.png';
import Cartp2 from '../image/cartp2.png';
import Croos2 from '../image/croos2.png';
import Cart1 from '../image/cart1.png';
import Cart2 from '../image/cart2.png';
import Logo3 from '../image/Logo3.png';
import Card1 from '../image/card1.png';
import Card2 from '../image/card2.png';
import Card3 from '../image/card3.png';
import Card4 from '../image/card4.png';
import Card5 from '../image/card5.png';
import Card6 from '../image/card6.png';
import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from '@remix-run/react';

export function Layout({children, menu, setMenu, miniCart, setMiniCart}) {
  return (
    <div>
      <Header
        menu={menu}
        setMenu={setMenu}
        miniCart={miniCart}
        setMiniCart={setMiniCart}
      />
      <main className="abt_sec">{children}</main>
      <Footer />
    </div>
  );
}

function Header({menu, setMenu, miniCart, setMiniCart}) {
  // useEffect(() => {
  //   let didScroll;
  //   let lastScrollTop = 0;
  //   const damper = 20; // the number of pixels scrolled before header state is changed.
  //   const header = document.querySelector('header').offsetHeight;

  //   const handleScroll = () => {
  //     didScroll = true;
  //   };

  //   const hasScrolled = () => {
  //     const st = window.scrollY;
  //     if (Math.abs(lastScrollTop - st) <= damper) {
  //       return;
  //     }

  //     if (st > lastScrollTop && st > header) {
  //       document.querySelector('header').classNameList.add('hide-nav');
  //     } else {
  //       if (st + window.innerHeight < document.body.offsetHeight) {
  //         document.querySelector('header').classNameList.remove('hide-nav');
  //       }
  //     }

  //     lastScrollTop = st;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   const scrollInterval = setInterval(() => {
  //     if (didScroll) {
  //       hasScrolled();
  //       didScroll = false;
  //     }
  //   }, 150);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     clearInterval(scrollInterval);
  //   };
  // }, []);

  return (
    <header>
      <div className="top_header">
        <p>
          Get 10% off on minimum purchase of $100 use code <span>10OFF</span>{' '}
        </p>
      </div>
      <div className="container">
        <div className="main_header flex align_center justify_between">
          <div className="menu_icon">
            <button className="menu_btn bars">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="3" fill="white" />
                <rect y="6" width="20" height="3" fill="white" />
                <rect y="12" width="20" height="3" fill="white" />
              </svg>
            </button>
            <button className="menu_btn cross">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16 16M16 1L1 16"
                  stroke="white"
                  strokeWidth="2.4"
                />
              </svg>
            </button>
          </div>
          <div className="main_logo ">
            <a href="index.html" className="flex align_center">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navigation">
            <nav>
              <div className="main_menu">
                <ul className="flex align_center">
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="#">Meet your herbs</a>
                  </li>
                  <li>
                    <a href="#">Blogs </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="social_icon">
            <ul className="flex align_center">
              <li>
                <a href="#" className="flex">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="#1C6758"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="#1C6758"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/account/login" className="flex">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6673 17.5V15.8333C16.6673 14.9493 16.3161 14.1014 15.691 13.4763C15.0659 12.8512 14.218 12.5 13.334 12.5H6.66732C5.78326 12.5 4.93542 12.8512 4.31029 13.4763C3.68517 14.1014 3.33398 14.9493 3.33398 15.8333V17.5"
                      stroke="#1C6758"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                      stroke="#1C6758"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex shop_cart"
                  onClick={() => setMiniCart(!miniCart)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_239_7783)">
                      <path
                        d="M7.49935 18.3333C7.95959 18.3333 8.33268 17.9602 8.33268 17.5C8.33268 17.0398 7.95959 16.6667 7.49935 16.6667C7.03911 16.6667 6.66602 17.0398 6.66602 17.5C6.66602 17.9602 7.03911 18.3333 7.49935 18.3333Z"
                        stroke="#1C6758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.6673 18.3333C17.1276 18.3333 17.5007 17.9602 17.5007 17.5C17.5007 17.0398 17.1276 16.6667 16.6673 16.6667C16.2071 16.6667 15.834 17.0398 15.834 17.5C15.834 17.9602 16.2071 18.3333 16.6673 18.3333Z"
                        stroke="#1C6758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.833984 0.833344H4.16732L6.40065 11.9917C6.47686 12.3753 6.68558 12.72 6.99027 12.9653C7.29497 13.2105 7.67623 13.3408 8.06732 13.3333H16.1673C16.5584 13.3408 16.9397 13.2105 17.2444 12.9653C17.5491 12.72 17.7578 12.3753 17.834 11.9917L19.1673 5.00001H5.00065"
                        stroke="#1C6758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_239_7783">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <div className={`mini_cart ${miniCart ? 'active' : ''}`}>
                  <div className="cart_heading">
                    <div className="cart_title flex justify_between">
                      <h3>Cart (2)</h3>
                      <button
                        className="close_cart"
                        onClick={() => setMiniCart(!miniCart)}
                      >
                        <img src={Cross} alt="" />
                      </button>
                    </div>
                    <div className="cart_head">
                      <p>Your cart is reserved for 15.00 minutes</p>
                    </div>
                  </div>
                  <div className="cart_scroll">
                    <div className="main_cart_product">
                      <div className="cart_product flex">
                        <div className="cart_product_img">
                          <img src={Cartp1} alt="" />
                        </div>
                        <div className="cart_product_content flex justify_between">
                          <div className="cart_product_info">
                            <p>Full Moon Oil Cbd 20</p>
                            <div className="cart_product_price flex">
                              <h5>$19.00</h5>
                              <s>$24.00</s>
                              <span>20% off</span>
                            </div>
                            <div className="cart_product_count">
                              <div className="num-block skin-2">
                                <div className="num-in">
                                  <span className="minus dis"></span>
                                  <input
                                    type="text"
                                    className="in-num"
                                    value="1"
                                    readOnly=""
                                  />
                                  <span className="plus"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product_cross_img">
                            <img src={Croos2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="cart_product flex">
                        <div className="cart_product_img">
                          <img src={Cartp2} alt="" />
                        </div>
                        <div className="cart_product_content flex justify_between">
                          <div className="cart_product_info">
                            <p>Full Moon Oil Cbd 20</p>
                            <div className="cart_product_price flex">
                              <h5>$19.00</h5>
                              <s>$24.00</s>
                              <span>20% off</span>
                            </div>
                            <div className="cart_product_count flex">
                              <div className="num-block skin-2">
                                <div className="num-in">
                                  <span className="minus dis"></span>
                                  <input
                                    type="text"
                                    className="in-num"
                                    value="1"
                                    readOnly=""
                                  />
                                  <span className="plus"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product_cross_img">
                            <img src={Croos2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart_related_product">
                      <div className="cart_related_title">
                        <h3>Related Product</h3>
                      </div>
                      <div className="swiper" id="cart_slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="cart_slider_img">
                              <img src={Cart1} alt="" />
                            </div>
                            <div className="cart_slider_content">
                              <h3>Full Moon Oil Cbd 20</h3>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="cart_slider_img">
                              <img src={Cart2} alt="" />
                            </div>
                            <div className="cart_slider_content">
                              <h3>Full Moon Oil Cbd 20</h3>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="cart_slider_img">
                              <img src={Cart1} alt="" />
                            </div>
                            <div className="cart_slider_content">
                              <h3>Full Moon Oil Cbd 20</h3>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="cart_slider_img">
                              <img src={Cart2} alt="" />
                            </div>
                            <div className="cart_slider_content">
                              <h3>Full Moon Oil Cbd 20</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart_check_out">
                    <div className="cart_discount flex justify_between">
                      <p>Discount</p>
                      <p>$10.00</p>
                    </div>
                    <div className="cart_total flex justify_between">
                      <p>Subtotal</p>
                      <div className="total_price">
                        <s>$48.00</s>
                        <span>$38.00</span>
                      </div>
                    </div>
                    <div className="cart_checkout_btn">
                      <button>Checkout</button>
                    </div>
                    <p className="cart_p">
                      Shipping cost and coupon code apply on checkout page*
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer({menu}) {
  return (
    <footer>
      <div className="container">
        <div className="main_footer flex justify_between">
          <div className="foot1">
            <div className="main_logo ">
              <a href="#">
                <img src={Logo3} alt="" />
              </a>
            </div>
            <div className="foot1_content">
              <p>Herbal Herbs Farm</p>
              <p>Brevard, North Carolina</p>
              <p>© Herbal Herbs, 2023. All Rights Reserved.</p>
            </div>
            <div className="foot1_social">
              <h3>Follow us:</h3>
              <div className="social_media">
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_88_1091)">
                      <path
                        d="M11.3333 1.3335H4.66665C2.8257 1.3335 1.33331 2.82588 1.33331 4.66683V11.3335C1.33331 13.1744 2.8257 14.6668 4.66665 14.6668H11.3333C13.1743 14.6668 14.6666 13.1744 14.6666 11.3335V4.66683C14.6666 2.82588 13.1743 1.3335 11.3333 1.3335Z"
                        stroke="#3D8361"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6667 7.5802C10.7489 8.13503 10.6542 8.70168 10.3958 9.19954C10.1375 9.69741 9.72877 10.1011 9.22776 10.3533C8.72675 10.6055 8.15897 10.6933 7.6052 10.6042C7.05143 10.515 6.53985 10.2536 6.14323 9.85698C5.74662 9.46036 5.48516 8.94878 5.39605 8.39501C5.30694 7.84124 5.39472 7.27346 5.64689 6.77245C5.89907 6.27144 6.3028 5.86269 6.80066 5.60436C7.29853 5.34603 7.86518 5.25126 8.42001 5.33353C8.98596 5.41746 9.50991 5.68118 9.91447 6.08574C10.319 6.4903 10.5828 7.01425 10.6667 7.5802Z"
                        stroke="#3D8361"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6667 4.3335H11.6742"
                        stroke="#3D8361"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_88_1091">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_88_1097)">
                      <path
                        d="M15.0266 4.27984C14.9475 3.96344 14.7862 3.67355 14.5591 3.43944C14.332 3.20533 14.0471 3.03529 13.7333 2.9465C12.5866 2.6665 7.99997 2.6665 7.99997 2.6665C7.99997 2.6665 3.41331 2.6665 2.26664 2.97317C1.95281 3.06196 1.66796 3.232 1.44087 3.46611C1.21378 3.70022 1.0525 3.99011 0.973308 4.3065C0.763451 5.47021 0.660798 6.65071 0.666641 7.83317C0.65916 9.02453 0.761819 10.214 0.973308 11.3865C1.06061 11.6931 1.22551 11.9719 1.45207 12.1962C1.67863 12.4204 1.95919 12.5824 2.26664 12.6665C3.41331 12.9732 7.99997 12.9732 7.99997 12.9732C7.99997 12.9732 12.5866 12.9732 13.7333 12.6665C14.0471 12.5777 14.332 12.4077 14.5591 12.1736C14.7862 11.9395 14.9475 11.6496 15.0266 11.3332C15.2349 10.1782 15.3375 9.00673 15.3333 7.83317C15.3408 6.64181 15.2381 5.4523 15.0266 4.27984Z"
                        stroke="#3D8361"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 10.0133L10.3333 7.83332L6.5 5.65332V10.0133Z"
                        stroke="#3D8361"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_88_1097">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.3335H10C9.11597 1.3335 8.26812 1.68469 7.643 2.30981C7.01788 2.93493 6.66669 3.78277 6.66669 4.66683V6.66683H4.66669V9.33349H6.66669V14.6668H9.33335V9.33349H11.3334L12 6.66683H9.33335V4.66683C9.33335 4.49002 9.40359 4.32045 9.52862 4.19542C9.65364 4.0704 9.82321 4.00016 10 4.00016H12V1.3335Z"
                      stroke="#3D8361"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 5.3335C11.7276 5.3335 12.745 5.75492 13.4951 6.50507C14.2453 7.25521 14.6667 8.27263 14.6667 9.3335V14.0002H12V9.3335C12 8.97987 11.8595 8.64074 11.6095 8.39069C11.3594 8.14064 11.0203 8.00016 10.6667 8.00016C10.3131 8.00016 9.97393 8.14064 9.72388 8.39069C9.47383 8.64074 9.33335 8.97987 9.33335 9.3335V14.0002H6.66669V9.3335C6.66669 8.27263 7.08811 7.25521 7.83826 6.50507C8.58841 5.75492 9.60582 5.3335 10.6667 5.3335Z"
                      stroke="#3D8361"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.99998 6H1.33331V14H3.99998V6Z"
                      stroke="#3D8361"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66665 4.00016C3.40303 4.00016 3.99998 3.40321 3.99998 2.66683C3.99998 1.93045 3.40303 1.3335 2.66665 1.3335C1.93027 1.3335 1.33331 1.93045 1.33331 2.66683C1.33331 3.40321 1.93027 4.00016 2.66665 4.00016Z"
                      stroke="#3D8361"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3334 0.999868C14.6949 1.45019 13.9881 1.79461 13.24 2.01987C12.8385 1.55821 12.3049 1.231 11.7114 1.08249C11.1178 0.933975 10.493 0.971332 9.92141 1.1895C9.3498 1.40768 8.85898 1.79614 8.51534 2.30235C8.1717 2.80856 7.99182 3.40809 8.00002 4.01987V4.68653C6.82844 4.71691 5.66754 4.45708 4.62069 3.93017C3.57385 3.40325 2.67357 2.62562 2.00002 1.66653C2.00002 1.66653 -0.666646 7.66653 5.33335 10.3332C3.96037 11.2652 2.32479 11.7325 0.666687 11.6665C6.66669 14.9999 14 11.6665 14 3.99987C13.9994 3.81417 13.9816 3.62893 13.9467 3.44653C14.6271 2.77553 15.1072 1.92834 15.3334 0.999868Z"
                      stroke="#3D8361"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="foot2">
            <h5>Company</h5>
            <p>
              <a href="#">Meet the team</a>
            </p>
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">Media Room</a>
            </p>
            <p>
              <a href="#">Retailer Resources</a>
            </p>
            <p>
              <a href="#">Healthcare Professionals</a>
            </p>
            <p>
              <a href="#">Transparency in Coverage</a>
            </p>
          </div>
          <div className="foot2">
            <h5>Resources</h5>
            <p>
              <a href="#">Herb Reference Guide</a>
            </p>
            <p>
              <a href="#">Meet Your Herbs</a>
            </p>
            <p>
              <a href="#">Media Room</a>
            </p>
            <p>
              <a href="#">Herbal FAQs</a>
            </p>
            <p>
              <a href="#">Our Blog</a>
            </p>
          </div>
          <div className="foot2">
            <h5>About Herbal</h5>
            <p>
              <a href="#">Our Story</a>
            </p>
            <p>
              <a href="#">Our Farm</a>
            </p>
            <p>
              <a href="#">Quality & Sourcing</a>
            </p>
            <p>
              <a href="#">Sustainability</a>
            </p>
            <p>
              <a href="#">Social Impact</a>
            </p>
          </div>
          <div className="foot2">
            <h5>Support</h5>
            <p>
              <a href="#">Subscribe & Save</a>
            </p>
            <p>
              <a href="#">Shipping</a>
            </p>
            <p>
              <a href="#">Returns</a>
            </p>
            <p>
              <a href="/ContactUS">Contact Us</a>
            </p>
          </div>
        </div>
        <div className="footer_bottom flex align_center justify_between">
          <div className="services flex">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Disclaimer</a>
            <a href="#">Accessibility</a>
            <a href="#">Return Policy</a>
          </div>
          <div className="services flex">
            <img src={Card1} alt="" />
            <img src={Card6} alt="" />
            <img src={Card5} alt="" />
            <img src={Card3} alt="" />
            <img src={Card4} alt="" />
            <img src={Card2} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function AccountLink() {
  return (
    <Link to="/account/login" className="flex">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6673 17.5V15.8333C16.6673 14.9493 16.3161 14.1014 15.691 13.4763C15.0659 12.8512 14.218 12.5 13.334 12.5H6.66732C5.78326 12.5 4.93542 12.8512 4.31029 13.4763C3.68517 14.1014 3.33398 14.9493 3.33398 15.8333V17.5"
          stroke="#1C6758"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
          stroke="#1C6758"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
