import React  from 'react'
import { useParams, useNavigate  } from "react-router-dom";
import { idArr, projects } from '../utils/constants'
import './css/Project.css';
import { useState } from "react";


const Project = (props) => {
    const { id } = useParams();
    let matchFound = false;
    let curProj;

    const [imgCount, setImgCount] = useState(0);
    

    if (id === idArr[0]) {
        curProj = projects.skonnere;
    } else if (id === idArr[1]) {
        curProj = projects.massageTerapy;
    } else if (id === idArr[2]) {
        curProj = projects.graphite;
    } else if (id === idArr[3]) {
        curProj = projects.districtTonkin;
    } else if (id === idArr[4]) {
        curProj = projects.visitKoge;
    } else if (id === idArr[5]) {
        curProj = projects.smartPosters;
    } else if (id === idArr[6]) {
        curProj = projects.greenLead;
    } else if (id === idArr[7]) {
        curProj = projects.pimpMyMeat;
    }
    idArr.forEach(x => {
        if (x === id) {
            matchFound = true;
        }
    })
    if (!matchFound) {
        throw new Error('Sorry, wrong link');
    }
    const videoHandler = () => {
        if (curProj.videoUrl) {
            return true;
        }
    }
    const changePicture = () => {
        let nextImgCount = (imgCount + 1) ;
         if(curProj.galleryImgs.length < imgCount){
            nextImgCount = 0;
         }
         console.log('hi');
         console.log(nextImgCount);
        setImgCount(nextImgCount);
    }
    const changePictureToLeft = () =>{
        let nextImgCount = (imgCount - 1) ;
         if(0 > imgCount){
            nextImgCount = curProj.galleryImgs.length;
         }
         console.log('hi');
         console.log(nextImgCount);
        setImgCount(nextImgCount);
    }
    videoHandler();
    const navigate = useNavigate();
    let goToNext = () => {
        navigate('/Project/DistrictTonkin');
    }
    return (
        <div>
            <h1>{curProj.projectName}</h1>
            <img src={curProj.headerImg} alt={curProj.projectName} />
            <div className="aboutTheProject">
                <div className="boxContainer">
                    <div className="square"></div>
                    <div className="outsideSquare"></div>
                    <h1>About the project</h1>
                </div>
                <div className="description">{curProj.aboutText}</div>
                {videoHandler() ? <div><video src={curProj.videoUrl}></video></div> : null}
                <div className="smallGallery">
                    <img src={curProj.firstThreePics[0]} alt="firstThreePics" />
                    <img src={curProj.firstThreePics[2]} alt="firstThreePics" />
                    <img src={curProj.firstThreePics[2]} alt="firstThreePics" />
                </div>
                <div className="keyContainer">
                    <div className="boxContainer">
                        <div className="square"></div>
                        <div className="outsideSquare"></div>
                        <h1>Key focus</h1>
                    </div>
                    <p>{curProj.keyFocus}</p>
                </div>
                <div className="bigGalleryContainer">
                    <h1>{curProj.typeOfProject}</h1>
                    <div className="gallery">
                        <img src={curProj.galleryImgs[imgCount]} alt="gallery" />
                        {curProj.galleryImgs.map((x, index) => (
                            <div className='circle circleFull' key={index}></div>
                        ))}
                        <div className="btnsForGallery">
                            <div onClick={changePictureToLeft} className="leftBtn"></div>
                            <div onClick={changePicture} className="rightBtn">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interested">
                <h1>You might be interested</h1>
                <div className="containerForProjects" onClick={goToNext}>
                    <div className="projectNext">
                        <img src={projects.districtTonkin.headerImg} alt="nextProjImg" />
                        <h1>{projects.districtTonkin.projectName}</h1>
                        <p>{projects.districtTonkin.typeOfProject}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Project