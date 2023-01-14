import Logo from "../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="" role={"presentation"} />
      </div>
    </>
  );
};

export default Header;
