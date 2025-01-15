import StilKartica from "../shared/StilKartica";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <StilKartica>
      <div className="about">
        <h1>About</h1>
        <Link to="/">Nazad</Link>
      </div>
    </StilKartica>
  );
};

export default About;
