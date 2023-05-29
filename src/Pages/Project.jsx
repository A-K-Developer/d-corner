import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { idArr, projects } from '../utils/constants'
import './css/Project.css';
import { useState, useEffect, useRef } from "react";
import { Swipeable } from 'react-swipeable';

const Project = () => {
    const smallGalleryRef = useRef(null); // take ref for element from dom 
    const { id } = useParams(); // getting the id from Url!
    const [curProj, setCurProject ]= useState(null);  // useState for current project 
    const [ random , setRandom ] = useState(1)  // State we need to change it when user interact! 
    const [hasScrolled, setHasScrolled] = useState(false); // random is random number for printing projects 
    //has sscrolled is to catch scroll event and run function !! 
    const [imgCount, setImgCount] = useState(0);

  

    const handleScroll = () => {
      if (smallGalleryRef.current) {
        const rect = smallGalleryRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
        if (isVisible && !hasScrolled) {
          setHasScrolled(true)
          smallGalleryRef.current.classList.add('scrolled')
          // Execute the desired action when the section is visible
          console.log('smallGallery section is visible');
          // Add your logic here
        }else if(!isVisible && hasScrolled){
          setHasScrolled(false)
          smallGalleryRef.current.classList.remove('scrolled')
        }
      }
    };
    useEffect(() => {
      const scrollListener = () => {
        handleScroll();
      };
    
      window.addEventListener('scroll', scrollListener);
    
      return () => {
        window.removeEventListener('scroll', scrollListener);
      };
    }, []);
    

    useEffect(() => {
        const foundProject = findProjectByProjectName(id);
       if (foundProject) {
            setCurProject(foundProject);
        } else {
        console.log('Project not found.');
        }
    }, [id])

    function findProjectByProjectName(id){ 
        return projects.find(project => project.projectName === id);
    }
    

    const changePicture = () => {
        let circleArr = document.querySelectorAll('.circleFill')
        let length = curProj.galleryImgs.length


        let nextImgCount = (imgCount + 1);
        if (length < imgCount) {
            nextImgCount = 0;
            setImgCount(0)
        }
        if(nextImgCount >= length){
            nextImgCount = 0;
        }
        if(circleArr){
            circleArr[imgCount].classList.remove('fill')
            circleArr[nextImgCount].classList.add('fill')
        }
        if(imgCount > length || imgCount > 1){
            setRandom(getRandomNumber(1,7))
        }
        setImgCount(nextImgCount)

    }
    
    const changePictureToLeft = () => {
        let circleArr = document.querySelectorAll('.circleFill')
        let nextImgCount = (imgCount - 1);
        let length = curProj.galleryImgs.length

        if (0 > imgCount) {
            nextImgCount =length;
        }
        if(nextImgCount <0){
            nextImgCount = length - 1
        }
        if(circleArr){
            circleArr[imgCount].classList.remove('fill')
            circleArr[nextImgCount].classList.add('fill')
        }
        if(imgCount > length || imgCount > 1 ){
             setRandom(getRandomNumber(1,7))
        }
     

        setImgCount(nextImgCount);
    }

    function getRandomNumber(start, end){
        let min = Math.ceil(start);
        const max = Math.floor(end);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // videoHandler();
    if(!curProj) {
        return <div>Loading</div>
    }
    let random1 = random+1
  
    return (
       
            <div>
                <div>
                  <div className='projectsThemeContainer'>
                    <h1>{curProj.projectName}</h1>
                  </div>
                  <img className='headImgInProject' src={curProj.headerImg} alt={curProj.projectName} />
                  <div className="aboutTheProject">
                    <div className="boxContainer">
                      <div className="square"></div>
                      <div className="outsideSquare"></div>
                      <h1>About the project</h1>
                    </div>
                    <div className="descriptionInProject">{curProj.aboutText}</div>
                  </div>
                  <div className="smallGallery" ref={smallGalleryRef}>
                    <img src={curProj.firstThreePics[0]} alt="firstThreePics" />
                    <img src={curProj.firstThreePics[1]} alt="firstThreePics" />
                    <img src={curProj.firstThreePics[2]} alt="firstThreePics" />
                  </div>
                  <div className="aboutTheProject">
                    <div className="boxContainer">
                      <div className="square"></div>
                      <div className="outsideSquare"></div>
                      <h1>Key focus</h1>
                    </div>
                    <p className='descriptionInProject'>{curProj.keyFocus}</p>
                  </div>
                  <div className="bigGalleryContainer">
                    <h1>{curProj.typeOfProject}</h1>
                    <div className="gallery">
                      <img src={curProj.galleryImgs[imgCount]} alt="gallery" />
                      <div className="btnsForGallery">
                        <div onClick={changePictureToLeft} className="leftBtn"></div>
                        <div onClick={changePicture} className="rightBtn"></div>
                      </div>
                      <div className="circleContainer">
                        {curProj.galleryImgs.map((x, index) => (
                          <div className='circle' key={index}>
                            <div className='circleFill' ></div>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                  <div className="interested">
                    <h1>You might be interested</h1>
                    <div className="containerForProjects">
                      <div className="projectNext">
                        <img src={projects[random].headerImg} alt="nextProjImg" />
                        <h1>{projects[random].projectName}</h1>
                        <p>{projects[random].typeOfProject}</p>
                      </div>
                      <div className="projectNext">
                        
                        <img src={projects[random1].headerImg} alt="nextProjImg" />
                        <h1>{projects[random1].projectName}</h1>
                        <p>{projects[random1].typeOfProject}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          );
    
}
export default Project