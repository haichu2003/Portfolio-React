import "./intro.css";

// import image here
import space_station from "../../img/space_station.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Hai Chu</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">AI/ML Enthusiast</div>
                            <div className="i-title-item">
                                Backend Developer
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am currently a second-year software engineering
                        student in TAMK, Tampere,<br></br>
                        and I am looking for a trainee position as a ML
                        Engineer, AI Engineer or Backend Developer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
