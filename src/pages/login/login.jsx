import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import IITDLogo from "../../assets/iitd.svg";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { DOMAIN } from "../../domain";

const Login = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      axios
        .post(`${DOMAIN}google_login/`, {
          token: tokenResponse.access_token,
        })
        .then((response) => {
          console.log(response);
          if (response.data.error) {
            alert("Google login is unsuccessful.");
            return;
          } else if (response.data.message === "Logged in") {
            console.log(response.data.details);
            localStorage.setItem("access_token", response.data.tokens.access);
            localStorage.setItem("refresh_token", response.data.tokens.refresh);
            localStorage.setItem("user", JSON.stringify(response.data.details));
            navigate("/dashboard");
          } else if (response.data.message === "New User Created") {
            localStorage.setItem("response", JSON.stringify(response));
            navigate("/signup");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="login-boss-container">
        <div className="login-head">User Login</div>
        <div className="login-container">
          <div className="login-iit">
            <div className="login-iit-head mb-2">For IITD Community</div>
            <a
              className="action-btn flex items-center justify-center"
              href="https://oauth2.iitd.ac.in/authorize.php?response_type=code&client_id=j9McPoLgRB0kOA2W8TOsQjwePLYMdhpP&state=xyz"
            >
              <img className="iitlogo mr-6" src={IITDLogo} alt="iitd logo" />
              <div className="login-iit-body-text">Kerberos login</div>
            </a>
          </div>
          <div className="margin"></div>
          <div className="login-iit">
            <div className="login-iit-head mb-2">For Non-IITD Community</div>
            <button
              className="action-btn flex items-center justify-center"
              onClick={() => login()}
            >
              <svg
                className="iitlogo mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                
                <path
                  d="M23.7636 10.2497C23.9167 11.053 24 11.8929 24 12.7694C24 19.6252 19.3177 24.5 12.2457 24.5C10.6374 24.5005 9.04482 24.1904 7.55888 23.5875C6.07295 22.9846 4.7228 22.1007 3.58558 20.9864C2.44837 19.872 1.54638 18.5489 0.931149 17.0928C0.31592 15.6366 -0.00048978 14.076 5.69059e-07 12.5C-0.00048978 10.924 0.31592 9.36335 0.931149 7.90723C1.54638 6.45111 2.44837 5.12805 3.58558 4.01365C4.7228 2.89925 6.07295 2.01535 7.55888 1.41247C9.04482 0.809581 10.6374 0.49952 12.2457 0.500001C15.5522 0.500001 18.315 1.6922 20.4348 3.628L16.9827 7.01077V7.00223C15.6977 5.80272 14.0669 5.18712 12.2457 5.18712C8.20526 5.18712 4.92116 8.5321 4.92116 12.4927C4.92116 16.4521 8.20526 19.8043 12.2457 19.8043C15.9117 19.8043 18.4071 17.7503 18.9196 14.9295H12.2457V10.2497H23.7649H23.7636Z"
                  fill="#FFFBFF"
                />
              </svg>
              <div className="login-iit-body-text">Google login</div>
            </button>
          </div>
          <div className="login-noniit"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
