
import { Link, } from 'react-router-dom';
import './css/HomePage.css'
import {
    animatedLogo, video, welcomeTextContainer, buttons,
    aboutUsContainer, advantage, services, work
} from '../utils/constants';
import { Gallery, ButtonComp, HandleScrollEvent,ServiceSection } from '../components/index'

const VideoComponent = () => {
    return(
        <video className='Video' autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    )
}
const ImgComponent = () => {
    const imgSource  = 'https://firebasestorage.googleapis.com/v0/b/d-d-corner.appspot.com/o/img4.jpg?alt=media&token=12c5dbd4-6d8d-43d4-86a4-e3b8a0e5b580';


    return(
        <div className='bannerHomePage'>
            <div className="opacityBanner"></div>
        <img src={imgSource} alt="img Missing " />
        </div>
    )
}
const HomePage = () => {
    let changeBasedOnScreen ;
    if(window.screen.width > 700){
        changeBasedOnScreen = <VideoComponent /> ;
    }else{
        changeBasedOnScreen = <ImgComponent />
    }

    return (
        <div>
            <div className="video-container">
                <div className="opacityLayout"></div>
                
                {changeBasedOnScreen}
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