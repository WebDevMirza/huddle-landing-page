import "./Hero.css";
import HeroImg from "../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="hero-img">
            <img src={HeroImg} alt="hero image" />
          </div>
          <div className="hero-body">
            <h1 className="hero-title">Build The Community Your Fans Will Love</h1>
            <p className="hero-text">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.{" "}
            </p>
            <a className="btn" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
