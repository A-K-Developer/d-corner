
import { Link, } from 'react-router-dom';
import './css/HomePage.css'
import {
    logoDark, video, welcomeTextContainer, buttons,
    aboutUsContainer, advantage, services, work
} from '../utils/constants';
import { Gallery, ButtonComp } from '../components/index'

const HomePage = () => {

    return (
        <div>
            <div className="video-container">
                <div className="opacityLayout"></div>
                <video className='Video' autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>

                <div className="welcome-text-container">
                    <h1>{welcomeTextContainer[0]}<br />{welcomeTextContainer[1]}</h1>
                    <p>{welcomeTextContainer[2]}<br />{welcomeTextContainer[3]}<br />{welcomeTextContainer[4]}</p>
                    <p className='unwanted'>{welcomeTextContainer[5]}</p>
                    <ButtonComp type="Service" />
                </div>
            </div>
            <div className="description">
                <div className="aboutUsContainer">
                    <h1>{aboutUsContainer[0]}<br />{aboutUsContainer[1]}<br />{aboutUsContainer[2]}</h1>
                    <p>{aboutUsContainer[3]}</p>
                    <p>{aboutUsContainer[4]}</p>
                    <ButtonComp type="About" />
                </div>
                <div className="logoContainer">
                    <img src={logoDark} alt="Black Logo missing" />
                </div>
            </div>
            <div className="advantage">
                <h3>{advantage[0]}</h3>
                <div className="skills">
                    <div className="skill">
                        <div className="skillLine"></div>
                        <h1>{advantage[1]}</h1>
                    </div>
                    <div className="skill">
                        <div className="skillLine"></div>
                        <h1>{advantage[2]}</h1>
                    </div>
                    <div className="skill">
                        <div className="skillLine"></div>
                        <h1>{advantage[3]}</h1>
                    </div>
                </div>
            </div>
            <div className="services">

                <div className="service">
                    <h3>{services[0]}</h3>
                    <div className="serviceContainer">
                        <h1>{services[1]}</h1>
                        <div className="VisService">
                            <p>{services[2]}</p>
                            <p>{services[3]}</p>
                            <p>{services[4]}</p>
                            <p>{services[5]}</p>
                            <div className="backgroundLinear"></div>
                        </div>
                    </div>
                    <div className="serviceContainer">
                        <h1>{services[6]}</h1>
                        <div className="VisService">
                        <div className="backgroundLinear"></div>
                            <p>{services[7]}</p>
                            <p>{services[8]}</p>
                            <p>{services[9]}</p>
                            <p>{services[10]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work">
                <h3>{work[0]}</h3>
                <Gallery />
                <ButtonComp type="Work" classX = "gallery-btn" />
            </div>
        </div>
    )
}
export default HomePage;

/*


*/