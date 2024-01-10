import Stamp from '../image/stamp.png';
import Pro2 from '../image/pro2.png';
import Pro3 from '../image/pro3.png';
import Pro4 from '../image/pro4.png';
import Pro1 from '../image/pro1.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

export function NewArrival() {
  return (
    <section className="new_product">
      <div className="container">
        <div className="spacer">
          <div className="section_title">
            <h2>Newely Launched</h2>
          </div>
          <div className="stamp">
            <div className="stamp_wrap">
              <img src={Stamp} alt="" />
            </div>
          </div>
          <div className="swiper" id="new-product">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              modules={[Pagination]}
              pagination={{clickable: true}}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                511: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                767: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="swiper-wrapper main_product">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product_item">
                      <div className="product_img">
                        <div className="product_img_wrap">
                          <img
                            src={Pro1}
                            alt="new-product"
                            height="450px"
                            width="340px"
                          />
                        </div>
                      </div>
                      <div className="product_content">
                        <p>CBD+CBG OIL 20%</p>
                        <h4>Full Moon Oil Cbd 20</h4>
                        <div className="product_price flex">
                          <h5>$19.00</h5>
                          <s>$24.00</s>
                          <span>20% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product_item">
                      <div className="product_img">
                        <div className="product_img_wrap">
                          <img
                            src={Pro2}
                            alt="new-product"
                            height="450px"
                            width="340px"
                          />
                        </div>
                      </div>
                      <div className="product_content">
                        <p>CBD+CBG OIL 20%</p>
                        <h4>Full Moon Oil Cbd 20</h4>
                        <div className="product_price flex">
                          <h5>$19.00</h5>
                          <s>$24.00</s>
                          <span>20% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product_item">
                      <div className="product_img">
                        <div className="product_img_wrap">
                          <img
                            src={Pro3}
                            alt="new-product"
                            height="450px"
                            width="340px"
                          />
                        </div>
                      </div>
                      <div className="product_content">
                        <p>CBD+CBG OIL 20%</p>
                        <h4>Full Moon Oil Cbd 20</h4>
                        <div className="product_price flex">
                          <h5>$19.00</h5>
                          <s>$24.00</s>
                          <span>20% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="swiper-slide">
                    <div className="product_item">
                      <div className="product_img">
                        <div className="product_img_wrap">
                          <img
                            src={Pro4}
                            alt="new-product"
                            height="450px"
                            width="340px"
                          />
                        </div>
                      </div>
                      <div className="product_content">
                        <p>CBD+CBG OIL 20%</p>
                        <h4>Full Moon Oil Cbd 20</h4>
                        <div className="product_price flex">
                          <h5>$19.00</h5>
                          <s>$24.00</s>
                          <span>20% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="product_btn">
            <a href="#" className="btn">
              Shop More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
