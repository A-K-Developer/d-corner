
import './css/aboutUs.css';
import { useState, useRef } from "react";
import {textChangingMission }from '../utils/constants'



const AboutUs = () => {
    const [paragraphState, setParagraphState] = useState('');
  const [headingState, setHeadingState] = useState('');
  const paragraphRef = useRef(null);
  const headingRef = useRef(null);

  const handleClickOnAbout = () => {
    setHeadingState(headingState)
    setParagraphState(paragraphState)
    console.log(paragraphRef);
    console.log(paragraphState);
  }

    return (
        <>
            <div>
                <div className="header-AboutUs">
                    <div className="aboutTextContainer">
                    <div className="opacityTextContainer"></div>
                    <h1>Our story</h1>
                    <p>All famous and successful worldwide brands have a compelling and unique story of how they were created. </p>
                    </div>
                </div>
                <div className="storyBehaid">
                    <h1>The story behind D&D Corner</h1>
                    <p>Our business idea bloomed in a small dorm room, outside beautiful Copenhagen.
                        Being in our final year of studies in the Multimedia Design course, we, three international students were dreaming of starting something on our own. Something that would join our passions, knowledge, and skills into a dream job, benefiting our society too.</p>
                    <p>
                        All our ideas were going in the direction of a digital and design agency. One that would merge the digital, design, communication, and entrepreneurial areas and develop a personalized offer for each client. All that with the mission to facilitate the entrance of small companies and startups into the digital world.</p>
                    <p>
                        For the first time, our dream agency was drawn on a white wall of that dorm room. Markers, acrylic colours and anything else that could paint were used to visualize our ideas. This is how, an ordinary day of spring, turned into the day our brand took shape and colour in all possible senses. </p>
                    <p>
                        It became a special day that meant so much in the creation of our brand identity and values. Specifically, it helped to set our values of creativity, diversity, and transparency. Each of them describes the agency's approach towards clients, performed jobs, and business environment.</p>
                    <p>
                        Today, the story of our brand creation is not just the history of the painted wall. This is the motivation for our agency to go confidently towards our mission and evolve with each client.</p>
                    <div className="btn storyBehaindBtn">
                        <p>See less</p>
                        <p>Arrow</p>
                    </div>
                </div>
                <div className="whiteBackground">
                    <div className="purpleSquare"></div>
                    <div className='textSectionInWhiteBack' onClick={handleClickOnAbout}>
                        <h1 className='h1ForChange' ref={headingRef}>{headingState}</h1>
                        <p className='pForChange' ref={paragraphRef}>{paragraphState}</p>
                    </div>
                </div>
                <div className="lastHeadingWork">
                    <h1>Here we are, the dream team, as we use to say!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor nobis incidunt enim voluptatem aut ratione? Perferendis ipsam amet facere?</p>
                    
                </div>
                <div className='personas'>
                        <div className="persona">
                            <img src="" alt="" />
                            <h1 className="name">Lavinia</h1>
                            <p>UX/UI Web Designer</p>
                        </div>
                        <div className="persona">
                        <img src="" alt="" />
                            <h1 className="name">Asen</h1>
                            <p>Web Developer</p>
                        </div>
                        <div className="persona">
                        <img src="" alt="" />
                            <h1 className="name">Iuliana</h1>
                            <p>Graphic Designer</p>
                        </div>

                       
                    </div>
            </div>
        </>
    )
}
export default AboutUs;


