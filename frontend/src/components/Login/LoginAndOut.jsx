// Import necessary dependencies and styles
import React from "react";
import "./login.css";
import { Link, NavLink } from "react-router-dom";

// Functional component for Login and Signup
const LoginAndOut = () => {
  // State variables (commented out for now)
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [signupEmail, setSignUpEmail] = useState("");
  // const [signupPassword, setSignUpPassword] = useState("");
  // const [signupName, setSignUpName] = useState("");
  // const [signupUserName, setSignUpUserName] = useState("");

  // Commented out hooks and functions for handling form submissions
  // const navigate = useNavigate();
  // const signUpHandler = async (e) => { /* ... */ };
  // const loginHandler = async (e) => { /* ... */ };

  return (
    <div className="box-form-Login">

      <div className="login-body">
        <section className="wrapper">
          <div
            className="form signup"
            onClick={() => {
              document.querySelector(".wrapper").classList.remove("active");
            }}
          >
            <header
              onClick={() => {
                document.querySelector(".wrapper").classList.remove("active");
              }}
            >
              Signup
            </header>
            <form>
              <input
                type="text"
                placeholder="Full name"
                required
                // value={signupName}
                // onChange={(e) => {
                //   setSignUpName(e.target.value);
                // }}
              />
              <input
                type="text"
                placeholder="User name"
                required
                // value={signupUserName}
                // onChange={(e) => {
                //   setSignUpUserName(e.target.value);
                // }}
              />
              <input
                type="text"
                placeholder="Email address"
                required
                // value={signupEmail}
                // onChange={(e) => {
                //   setSignUpEmail(e.target.value);
                // }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                // value={signupPassword}
                // onChange={(e) => {
                //   setSignUpPassword(e.target.value);
                // }}
              />
              <input type="submit" value="Signup" 
            //   onClick={signUpHandler} 
            />
            </form>
          </div>

          <div
            className="form login"
            onClick={() => {
              document.querySelector(".wrapper").classList.add("active");
            }}
          >
            <header
              onClick={() => {
                document.querySelector(".wrapper").classList.add("active");
              }}
            >
              Login
            </header>
            <form action="#">
              <input
                type="text"
                placeholder="Email address"
                required
                // value={loginEmail}
                // onChange={(e) => {
                //   setLoginEmail(e.target.value);
                // }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                // value={loginPassword}
                // onChange={(e) => {
                //   setLoginPassword(e.target.value);
                // }}
              />

              <input type="submit" value="Login"
            //    onClick={loginHandler} 
               />
            </form>
          </div>

          {/* 
          <script>
            const wrapper = document.querySelector(".wrapper"),
              signupHeader = document.querySelector(".signup header"),
              loginHeader = document.querySelector(".login header");

            loginHeader.addEventListener("click", () => {
              wrapper.classList.add("active");
            });
            signupHeader.addEventListener("click", () => {
              wrapper.classList.remove("active");
            });
          </script>
          */}
        </section>
      </div>

      {/* <div className="image-login">
        <div class="sign-up-class">
        <img class="login-img-class" src="./images/login/loginimg.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

// Export the LoginAndOut component as the default export
export default LoginAndOut;