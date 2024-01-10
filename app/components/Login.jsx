import React from 'react';

function Login() {
  return (
    <main class="abt_sec">
      <section>
        <div class="container">
          <div class="spacer">
            <div class="section_title">
              <h2>Welcome Back, Login here</h2>
            </div>
            <div class="register_frm">
              <div class="right_contact_form">
                <form action="">
                  <div class="contact_email">
                    <label for="">E-mail Address </label>
                    <br />
                    <input type="email" />
                  </div>
                  <div class="contact_email">
                    <label for="">Password </label>
                    <br />
                    <input type="password" />
                  </div>
                  <div class="login_btn">
                    <button>LogIn</button>
                  </div>
                  <span>
                    Not have an account? <a href="register.html">Signup</a> here
                  </span>
                  <div class="forgot_pass">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
