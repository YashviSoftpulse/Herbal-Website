import AboutBanner from '../image/about-banner.png';
import Frame21 from '../image/Frame 21.png';
import Abt1 from '../image/abt1-2.png';
import Frame211 from '../image/Frame211.png';
import Health2 from '../image/health2.png';
import Health1 from '../image/health1.png';
import Health3 from '../image/health3.png';
import Health4 from '../image/health4.png';
import Certified from '../image/certified.png';
import Plus from '../image/plus.png';
import Minus from '../image/minus.png';
import Discount from '../image/discount.png';

export function AboutUs() {
  return (
    <main className="abt_sec">
      <section className="abt_banner">
        <div className="container">
          <div className="main_about_banner flex align_center justify_center">
            <div className="about_banner_img">
              <img src={AboutBanner} alt="about" />
            </div>
            <div className="about_banner_content">
              <h2>Connecting People, Plants & Planet to Create Healing</h2>
              <p>
                Since Gaia Herbs was just a seedling in 1987, we have remained
                true to our purpose: connecting people, plants, and planet to
                create healing. We knew then what many are coming to realize
                now—plants and people evolved together, that we are inextricably
                linked, and that plants hold the wisdom we need to heal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="spacer">
            <div className="main_industry flex align_center">
              <div className="left_industry">
                <div className="industry_img">
                  <img
                    src={Frame21}
                    alt="our_industry"
                    height="500px"
                    width="580px"
                  />
                  <div className="industry_vector">
                    <img src={Abt1} alt="" />
                  </div>
                </div>
              </div>
              <div className="right_industry">
                <div className="industry_content">
                  <h3>Industry Partnerships & Affiliations</h3>
                  <p>
                    Gaia Herbs is an active and committed member of the U.S.
                    herbal products industry and a long-time supporter of
                    natural health professionals. We work with the following
                    organizations to assure consumer and regulatory confidence
                    in our products.
                  </p>
                  <p>
                    Gaia Herbs is an active and committed member of the U.S.
                    herbal products industry and a long-time supporter of
                    natural health professionals. We work with the following
                    organizations to assure consumer and regulatory confidence
                    in our products.
                  </p>
                </div>
              </div>
            </div>

            <div className="main_industry2 flex align_center">
              <div className="left_industry">
                <div className="industry_img">
                  <div className="industry_vector2">
                    <img src="image/abt.png" alt="" />
                  </div>
                  <img
                    src={Frame211}
                    alt="our_industry"
                    height="500px"
                    width="580px"
                    className="abt_industry_img"
                  />
                </div>
              </div>
              <div className="right_industry">
                <div className="industry_content">
                  <h3>Industry Partnerships & Affiliations</h3>
                  <p>
                    Gaia Herbs is an active and committed member of the U.S.
                    herbal products industry and a long-time supporter of
                    natural health professionals. We work with the following
                    organizations to assure consumer and regulatory confidence
                    in our products.
                  </p>
                  <p>
                    Gaia Herbs is an active and committed member of the U.S.
                    herbal products industry and a long-time supporter of
                    natural health professionals. We work with the following
                    organizations to assure consumer and regulatory confidence
                    in our products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="spacer">
            <div className="main_health flex align_center justify_center">
              <div className="health">
                <img src={Health2} alt="" />
                <div className="health_content">
                  <h4>100% Hand Made</h4>
                  <p>
                    These handmade Herbal are loaded with anti-bacterial and
                    anti-inflammatory properties.
                  </p>
                </div>
              </div>
              <div className="health">
                <img src={Health3} alt="" />
                <div className="health_content">
                  <h4>1000 year old tradition</h4>
                  <p>
                    These handmade Herbal are loaded with anti-bacterial and
                    anti-inflammatory properties.
                  </p>
                </div>
              </div>
              <div className="health">
                <img src={Health4} alt="" />
                <div className="health_content">
                  <h4>Live Long & Healthy</h4>
                  <p>
                    These handmade Herbal are loaded with anti-bacterial and
                    anti-inflammatory properties.
                  </p>
                </div>
              </div>
              <div className="health">
                <img src={Health1} alt="" />
                <div className="health_content">
                  <h4>Balanced Life</h4>
                  <p>
                    These handmade Herbal are loaded with anti-bacterial and
                    anti-inflammatory properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="spacer">
            <div className="main_certified">
              <div className="certified_content flex align_center justify_center">
                <img src={Certified} alt="" />
                <div className="certified_text">
                  <h3>Certified B Corporation</h3>
                  <p>
                    Gaia Herbs is proud to be a Certified B Corporation®,
                    actively working to build a more inclusive and sustainable
                    economy. Certified B Corporations are businesses that meet
                    the highest standards of verified social and environmental
                    performance, public transparency, and legal accountability
                    to balance profit and purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="spacer">
            <div className="section_title">
              <h2>Know More About Us</h2>
            </div>
            <div className="main_accordion flex align_center">
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>What does LOREM mean?</h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>Where can I subscribe to your newsletter?</h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>Where can I edit my billing and shipping address?</h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>
                    We would like to sell our magazine through your shop but we
                    haven’t yet received an answer
                  </h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>
                    We want to send you a sample copy of our magazine but can't
                    find your address.
                  </h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_pannel flex justify_between">
                  <h4>Can I make an order and pick it up?</h4>
                  <div className="main_accordion_btn">
                    <button className="accordion_btn plus">
                      <img src={Plus} alt="" />
                    </button>
                    <button className="accordion_btn minus">
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="pannel">
                  <p>
                    Yes, that's possible. Just make your order and choose
                    “Pickup” from the shipping methods in the checkout. Please
                    note: In the case of pickup orders, which are to be sent by
                    Swiss Post at the request of the customer, a processing fee
                    of CHF 10.00 will be charged in addition to the shipping
                    costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="spacer">
            <div className="main_discount_banner flex align_center">
              <div className="discount_vector">
                <img src={Discount} alt="" />
              </div>
              <div className="discount_content">
                <h4>Do you want a 10% discount for your first purchase?</h4>
                <p>Join our newsletter and get discount</p>
                <input type="email" placeholder="Enter your email address" />
                <div className="discount_btn">
                  <a href="#" className="btn">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
