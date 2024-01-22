import "./footer.css";
import logo from "../../assets/Footer/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-grad"></div>
      <div className="flex-container">
		<div className="mail-details-container">
        <div className="white-colour " id="query">
          For any queries contact us at :
        </div>
        <div className="mail">
          <div>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div>
            <a href="mailto:admin@tryst-iitd.org">admin@tryst-iitd.org</a>
          </div>
        </div>
		</div>
        <div className="image-container">
          <div className="flex-item flex-item1">
            <img src={logo} alt="logo"></img>
          </div>
        </div>
        <div className="horizontal-bar"></div>
        <div className="flex-item flex-item4">
          <div className="flex-item4-in">
            <div className="white-colour" id="follow">
              Follow US!
            </div>
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
        </div>
      </div>
      <div className="copyright">
        ©TRYST’24, IIT Delhi, Hauz Khas, New Delhi - 110016
      </div>
    </div>
  );
}
export default Footer;
