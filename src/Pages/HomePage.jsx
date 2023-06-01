
import { Link, } from 'react-router-dom';
import './css/HomePage.css'
import {
    animatedLogo, video, welcomeTextContainer, buttons,
    aboutUsContainer, advantage, services, work
} from '../utils/constants';
import { Gallery, ButtonComp, HandleScrollEvent,ServiceSection } from '../components/index'

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
                    <img src={animatedLogo} alt="Black Logo missing" />
                </div>
            </div>
            <HandleScrollEvent />
            <ServiceSection />
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