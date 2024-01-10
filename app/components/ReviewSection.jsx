import FiveStar from '../image/5 star.png';
import Quote from '../image/quote.png';
import HalfStar from '../image/half-star.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

export function ReviewSection() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="spacer">
          <div className="section_title flex justify_between">
            <h2>Real Reviews From Real Customers</h2>
            <div className="title_star flex align_center">
              <img src={HalfStar} alt="" />
              <span>(1617 Ratings)</span>
            </div>
          </div>
          <div className="swiper" id="testimonial">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{clickable: true}}
              breakpoints={{
                100: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                501: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                601: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1080: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial_content">
                      <div className="star_content flex align_center">
                        <img src={FiveStar} alt="" />
                        <span>12 December 2022</span>
                      </div>
                      <h3>Love your product!!</h3>
                      <div className="quote_content flex align_center">
                        <div className="quote_img">
                          <img src={Quote} alt="" />
                        </div>
                        <div className="quote">
                          <p>
                            I have been taking Turmeric for years and I
                            especially like Gaia products and the service is
                            great. Thanks for a great product.
                          </p>
                          <h6>Gimmy Timission</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
