import "./footer.css";
import logo from "../../assets/Footer/logo.png";
import ParallaxStars from "./ParallaxStars";
import BgImage from "../../assets/Footer/bg1.png";
import BgImageMobile from "../../assets/Footer/bg-mobile.png";
import mailimg from "../../assets/Footer/mail.svg";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ParallaxStars />
        <img src={BgImage} className="bg-color-footer-gradient-laptop" />
        <img src={BgImageMobile} className="bg-color-footer-gradient-mobile" />
        <div className="horizontal-bar"></div>
        <div className="contact-section">
          <div className="white-colour " id="query">
            For any queries contact us at :
          </div>
          <div className="mail">
            <div className="footer-mail">
              <img className="fa-regular fa-envelope" src={mailimg}></img>
              <a href="mailto:admin@tryst-iitd.org">admin@tryst-iitd.org</a>
            </div>
          </div>
        </div>
        <div className="logo-section">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-section">
          <p>Follow US!</p>
          <div className="social-icons">
            <div className="handles">
              <div className="handle">
                <a href="https://www.instagram.com/tryst.iitd/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="handle">
                <a href="https://www.facebook.com/IITD.Tryst/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="handle">
                <a href="https://www.linkedin.com/company/tryst-iit-delhi/?originalSubdomain=in">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="handle">
                <a href="https://www.youtube.com/channel/UClFEnH3ydeP1QUNeI0IHC3g">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="policy-section">
            <a href="https://fitt-iitd.in/web/privacy">Privacy Policy</a>
            <a href="https://fitt-iitd.in/web/paymentpolicy">Payment Cancellation Policy</a>
            <a href="https://fitt-iitd.in/web/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
