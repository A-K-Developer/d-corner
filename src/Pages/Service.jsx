import { useEffect, useRef } from 'react';
import { imgForService } from '../utils/constants';
import './css/service.css';

const Service = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.classList.add('scaleAnimation');
          } else {
            imgRef.current.classList.remove('scaleAnimation');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold value to control when the animation triggers
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="headerServices">
        <h1>Our services</h1>
        <div className="imgContainer">
          <img ref={imgRef} src={imgForService[0]} alt={imgForService[0]} />
        </div>
        <p>
          Have you ever asked yourself how your clients and competitors perceive your company, whether it is easily recognizable, and what they think about it?
        </p>
        <p>
          Visual identity is about creating an emotional connection with the viewers. The aim is to talk indirectly about who your company is and what services it is providing.
        </p>
      </div>
      <div className="whatWeDo">
        <h1>So, what can we do for your business? </h1>
        <p>We can make a design manual that will include logo design, colour palette, typography, imagery style, and other graphic assets essential for your visual identity. The design manual will include a description of our decisions and how they can be used.</p>
      </div>
    </div>
  );
};

export default Service;
