function ContactUS() {
  return (
    <section>
      <div className="container">
        <div className="spacer">
          <div className="section_title">
            <h2>Let Us Help You</h2>
          </div>
          <div className="main_contact flex align_center">
            <div className="left_contact">
              <div className="left_contact_img">
                <img
                  src="image/contact.png"
                  alt="contact"
                  height="496px"
                  width="710px"
                />
              </div>
            </div>
            <div className="right_contact">
              <div className="right_contact_form">
                <form action="">
                  <div className="contact_frm_select">
                    <label htmlFor="">How can we assist?</label>
                    <br />
                    <select name="" id="">
                      <option value="">Question about product</option>
                    </select>
                  </div>
                  <div className="contact_name flex">
                    <div className="first_name">
                      <label htmlFor="">First Name</label>
                      <br />
                      <input type="text" />
                    </div>
                    <div className="last_name">
                      <label htmlFor="">Last Name</label>
                      <br />
                      <input type="text" />
                    </div>
                  </div>
                  <div className="contact_email">
                    <label htmlFor="">E-mail Address </label>
                    <br />
                    <input type="email" />
                  </div>
                  <div className="contact_textarea">
                    <label htmlFor="">How can we help you?</label>
                    <br />
                    <textarea name="" id="" cols="50" rows="4"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;
