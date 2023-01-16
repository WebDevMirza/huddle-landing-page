import "./Footer.css";
import IcoFacebook from "../images/facebook-f.svg";
import IcoTwitter from "../images/twitter.svg";
import IcoInstagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <ul className="footer">
          <li>
            <a href="#">
              <img src={IcoFacebook} alt="Facebook" width={50} height={50} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IcoTwitter} alt="Twitter" width={50} height={50} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IcoInstagram} alt="Instagram" width={50} height={50} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
