import "./Footer.css";
import IcoFacebook from "../images/logo-facebook.svg";
import IcoTwitter from "../images/logo-twitter.svg";
import IcoInstagram from "../images/logo-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={IcoFacebook} alt="" width={50} height={50} />
        <img src={IcoTwitter} alt="" width={50} height={50} />
        <img src={IcoInstagram} alt="" width={50} height={50} />
      </div>
    </>
  );
};

export default Footer;
