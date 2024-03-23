import React, { useEffect } from "react";
import "./adminlogin.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { DOMAIN } from "../../domain";
import adminLoggedOutNavigator from "../routes/adminLoggedOutNavigator";

const initialValues = {
  username: "",
  password: "",
};
function AdminLogin() {
  const navigate = useNavigate();
  React.useEffect(adminLoggedOutNavigator(useNavigate()));

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("username is a required field"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,

      onSubmit: (values) => {
        axios
          .post(`${DOMAIN}adminlogin/`, values)
          .then((response) => {
            // console.log(response.data);
            localStorage.setItem(
              "admin_access_token",
              response.data.tokens.access
            );
            localStorage.setItem(
              "admin_refresh_token",
              response.data.tokens.refresh
            );
            navigate("/admin/events", { replace: true });
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.error + ". Please try again");
          });
      },
    });

  return (
    <>
      <div className="publicity-pages">
        <form onSubmit={handleSubmit}>
          <div className="ad-login-head">
            <div id="home-link" className="home54765">
              {/* <img id="logo" src={logo} alt="logo"></img> */}
            </div>
          </div>

          <div className="ad-log-main">
            <div className="ad-log-form">
              <div className="ad-log-title">ADMIN LOGIN</div>
              <div className="admin-id">
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Username"
                ></input>
                {errors.username && touched.username ? (
                  <p className="error">{errors.username}</p>
                ) : null}
              </div>
              <div className="admin-password">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  placeholder="Password"
                ></input>
                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}
              </div>
              <div className="submit-button-container">
                <div className="admin-login-form-submit">
                  <button className="ad-log-btn" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="ad-log-img">
              <div>{/* <img src={doodle} alt="doodle"></img> */}</div>
            </div>
          </div>
        </form>
      </div>
      <footer className="fixed-footer">©TRYST’24, IIT Delhi</footer>
    </>
  );
}

export default AdminLogin;
