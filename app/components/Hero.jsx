import BannerImg from '../image/banner-img.png';
import BannerResponsive from '../image/banner-responsive.avif';
import BannerVector1 from '../image/banner-vector1.png';
import BannerVector2 from '../image/banner-vector2.png';
import BannerVector3 from '../image/banner-vector3.png';
import BannerVector4 from '../image/banner-vector4.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

export function Hero() {
  return (
    <section className="banner_slider">
      <div className="main_banner">
        <div className="swiper" id="banner_slider">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="banner_img">
                    <img src={BannerImg} alt="" />
                  </div>
                  <div className="banner_responsive">
                    <img src={BannerResponsive} alt="" />
                  </div>
                  <div className="container">
                    <div className="main_banner_contant flex justify_end">
                      <div className="banner_contant">
                        <h4>Herbs that help you</h4>
                        <h1>Live longer and healthy on planet Earth</h1>
                        <div className="banner_vector_contant flex">
                          <div className="banner_vector">
                            <img src={BannerVector1} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector2} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector3} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector4} alt="" />
                            <p>Handmade</p>
                          </div>
                        </div>
                        <a href="#" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="banner_img">
                    <img src={BannerImg} alt="" />
                  </div>
                  <div className="banner_responsive">
                    <img src={BannerResponsive} alt="" />
                  </div>
                  <div className="container">
                    <div className="main_banner_contant flex justify_end">
                      <div className="banner_contant">
                        <h4>Herbs that help you</h4>
                        <h1>Live longer and healthy on planet Earth</h1>
                        <div className="banner_vector_contant flex">
                          <div className="banner_vector">
                            <img src={BannerVector1} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector2} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector3} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector4} alt="" />
                            <p>Handmade</p>
                          </div>
                        </div>
                        <a href="#" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="banner_img">
                    <img src={BannerImg} alt="" />
                  </div>
                  <div className="banner_responsive">
                    <img src={BannerResponsive} alt="" />
                  </div>
                  <div className="container">
                    <div className="main_banner_contant flex justify_end">
                      <div className="banner_contant">
                        <h4>Herbs that help you</h4>
                        <h1>Live longer and healthy on planet Earth</h1>
                        <div className="banner_vector_contant flex">
                          <div className="banner_vector">
                            <img src={BannerVector1} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector2} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector3} alt="" />
                            <p>Handmade</p>
                          </div>
                          <div className="banner_vector">
                            <img src={BannerVector4} alt="" />
                            <p>Handmade</p>
                          </div>
                        </div>
                        <a href="#" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>

          {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  );
}
