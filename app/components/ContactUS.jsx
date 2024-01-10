function ContactUS() {
  return (
    <section>
      <div class="container">
        <div class="spacer">
          <div class="section_title">
            <h2>Let Us Help You</h2>
          </div>
          <div class="main_contact flex align_center">
            <div class="left_contact">
              <div class="left_contact_img">
                <img
                  src="image/contact.png"
                  alt="contact"
                  height="496px"
                  width="710px"
                />
              </div>
            </div>
            <div class="right_contact">
              <div class="right_contact_form">
                <form action="">
                  <div class="contact_frm_select">
                    <label for="">How can we assist?</label>
                    <br />
                    <select name="" id="">
                      <option value="">Question about product</option>
                    </select>
                  </div>
                  <div class="contact_name flex">
                    <div class="first_name">
                      <label for="">First Name</label>
                      <br />
                      <input type="text" />
                    </div>
                    <div class="last_name">
                      <label for="">Last Name</label>
                      <br />
                      <input type="text" />
                    </div>
                  </div>
                  <div class="contact_email">
                    <label for="">E-mail Address </label>
                    <br />
                    <input type="email" />
                  </div>
                  <div class="contact_textarea">
                    <label for="">How can we help you?</label>
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
