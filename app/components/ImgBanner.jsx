import ImgBanner2 from '../image/img-banner2.png'
import ImgBanner1 from '../image/img-banner1.png'

export function ImgBanner() {
  return (
    <section className="img_banner_sec">
      <div className="container">
        <div className="spacer">
          <div className="main_news_banner flex justify_center ">
            <div className="banner_news">
              <div className="news_banner_img1">
                <div className="news_img_wrap">
                  <img
                    src={ImgBanner2}
                    alt=""
                    height="690px"
                    width="690px"
                  />
                </div>
              </div>
              <div className="news_banner_content">
                <p>Herbal products make you</p>
                <h4>
                  More Beautiful and <br /> confident every time.
                </h4>
                <a href="#" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="banner_news">
              <div className="news_banner_img2">
                <div className="news_img_wrap">
                  <img src={ImgBanner1} alt="" />
                </div>
              </div>
              <div className="news_banner_content2">
                <p>Herbal products make you</p>
                <h4>
                  Healthy and fit everyday <br /> no need to gym
                </h4>
                <a href="#" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
