import React  from 'react'

import { Link, useNavigate, useLocation } from "react-router-dom"
import { galleryImg, logo, projects  } from "../utils/constants"
import { useState, useEffect,useRef } from 'react';
import { ProjectGallery } from '../components/index'
import './css/WorkPage.css'






const Work = () => {
 
    const hideContentRef = useRef(null)

    useEffect(() => {
        const imges = document.querySelectorAll('.singleProject img')
        for (let index = 0; index < imges.length; index++) {
            if(index % 2 === 0){
                const element = imges[index];
                element.style.height = '50%';
            }
            
        }
    })

    useEffect(() => {
        const part2 = document.querySelector('.movingLogo.part2');
        const handleAnimationEnd = () =>{ 
            console.log(hideContentRef);
            hideContentRef.current.classList.add('hideContentWork1')
        }
        if(part2){
            console.log(part2);
            part2.addEventListener('animationend', handleAnimationEnd)
        }
        return () => {
            if(part2){
                part2.removeEventListener('animationend',handleAnimationEnd)
            }
        }
    },[])



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
                <div className='hideContentWork' ref={hideContentRef}>
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