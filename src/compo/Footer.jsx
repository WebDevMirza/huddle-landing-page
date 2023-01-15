import "./Footer.css";
import IcoFacebook from "../images/facebook-f.svg";
import IcoTwitter from "../images/twitter.svg";
import IcoInstagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div>
        <ul className="footer">
          <li>
            <a href="#">
              <img src={IcoFacebook} alt="" width={50} height={50} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IcoTwitter} alt="" width={50} height={50} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IcoInstagram} alt="" width={50} height={50} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
