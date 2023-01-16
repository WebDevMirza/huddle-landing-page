import Logo from "../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="logo">
        <a href="#">
          <img src={Logo} alt="Huddle" />
        </a>
      </header>
    </>
  );
};

export default Header;
