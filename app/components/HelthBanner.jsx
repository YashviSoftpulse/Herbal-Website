import Health1 from '../image/health1.png';
import Health2 from '../image/health2.png';
import Health3 from '../image/health3.png';
import Health4 from '../image/health4.png';

export function HelthBanner() {
  return (
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
  );
}
