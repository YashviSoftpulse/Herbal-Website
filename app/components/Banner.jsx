import Medicine2 from '../image/medicine2.png'
import Medicine1 from '../image/medicine1.png'

export function Banner() {
  return (
    <section id="medicine_banner">
      <div className="medicine_banner">
        <div className="container">
          <div className="main_medicine_banner flex align_center justify_between">
            <div className="left_medicine_img">
              <img src={Medicine2} alt="" />
            </div>
            <div className="medicine_content">
              <div className="section_title">
                <h2>Herbal Medicine & Ayurveda</h2>
              </div>
              <p>
                Herbal Medicine is an interdisciplinary branch between Herbal
                Medicine and Ayurveda and it covers all the fields of Herbal
                Medicine related to Botany, Medicinal Plant Research,
                Pharmacognosy, Phytochemistry, Phytotherapy, botanical
                medicines, Ayurveda and Natural chemistry, Agriculture Science,
                Unani Medicine, Biotechnology and Biochemistry.
              </p>
              <a href="#" className="btn">
                Know More
              </a>
            </div>
            <div className="right_medicine_img">
              <img src={Medicine1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
