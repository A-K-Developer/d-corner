import React  from 'react'

import { Link, useNavigate, useLocation } from "react-router-dom"
import { galleryImg, projects } from "../utils/constants"
import { useState, useEffect } from 'react';
import './css/WorkPage.css'






const Work = () => {

    const ProjectGallery = () => {
        const navigate = useNavigate();
        let location = useLocation();

        console.log(location);
        let RedirectToProject = (e) => {
        
            let curr = e.currentTarget.firstElementChild.nextSibling.textContent;
            navigate(`/Project/${curr}`,{replace: true});
         
         }

        return(
            <>
            {Object.keys(projects).map((key) => {
                const project = projects[key];
                return(
                    <div onClick={RedirectToProject} key={key}>
                        <img src={project.headerImg} alt="projectHeading" />
                        <h1>{project.projectName}</h1>
                        <p>{project.typeOfProject}</p>
                    </div>
                )
            })}
            </>
        )
    }
  


return (
    <>
        <div className="logoHeader">
            <div className="container">
                <img
                    src={galleryImg.dandD}
                    alt="des"
                    className="movingLogo "
                />
                <img
                    src={galleryImg.dandD}
                    alt="des"
                    className="movingLogo part2"
                />
                <div>
                    <h1>Our Work</h1>
                    <p>Empowering your company to become noticeable and recognizable</p>
                    <Link className="btn work-btn" to="./Service">Get a deal</Link>
                </div>
            </div>
        </div>
        <div className="portfolioWork">
            <h3>Our Portfolio</h3>
            <div className="workContainer">
                <ProjectGallery />
            </div>
        </div>
        <div className="testemonial">

        </div>
    </>
);
};
export default Work