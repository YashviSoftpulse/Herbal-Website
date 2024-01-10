import Discount from '../image/discount.png';

export function Newsletter() {
  return (
    <section className="dis_banner">
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
  );
}
