import { useContext } from "react";
import "./about.css";
import { ThemeContext } from "../../context";

import tamk_logo from "../../img/tamk_logo.png";

const About = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className="a">
            {/* <div className="a-left">
                <div
                    className="a-card bg"
                ></div>
                <div
                    className="a-card"
                    style={{
                        backgroundColor: !theme.state.darkMode ? "aqua" : "#333",
                    }}
                >
                    <img src="" alt="some image" className="a-img" />
                </div>
            </div> */}
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Hello! Below are some information about myself.
                </p>
                <p className="a-desc"></p>
                <div className="a-award">
                    <div className="a-award bg">
                        <img src={tamk_logo} alt="" className="a-award-img" />
                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Study at TAMK</h4>
                        <p className="a-award-desc">
                            I am currently a second-year student majoring in
                            software engineer.<br></br>
                            Although being a second-year student, I have
                            finished <br />
                            about 75% of the required credits with flying
                            colors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
