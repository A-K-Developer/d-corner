import React, { useEffect, useState } from 'react';
import { advantage } from '../../utils/constants'

const HandleScrollEvent = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [lines, setLines] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.advantage');
      const lines = document.querySelectorAll('.skillLine');

      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !sectionVisible) {
          setSectionVisible(true);
        }else{
          
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionVisible]);

  return (
    <div className="advantage">
      <h3>{advantage[0]}</h3>
      <div className="skills">
        <div className={`skill`}>
          <div className={`skillLine ${sectionVisible ? 'anime-line' : ''}`}></div>
          <h1>{advantage[1]}</h1>
        </div>
        <div className={`skill`}>
          <div className={`skillLine ${sectionVisible ? 'anime-line' : ''}`}></div>
          <h1>{advantage[2]}</h1>
        </div>
        <div className={`skill `}>
          <div className={`skillLine ${sectionVisible ? 'anime-line' : ''}`}></div>
          <h1>{advantage[3]}</h1>
        </div>
      </div>
    </div>
  );
};

export default HandleScrollEvent;
