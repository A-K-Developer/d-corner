import { useEffect, useRef } from 'react';
import { imgForService } from '../utils/constants';
import './css/service.css';

const ServiceTemplate = () => {

  return(
    <>
      <div className="containerForService">
        <h1>Visual Identity</h1>
        <div className="rowText">
          <p>Our visual identity service is dedicated to helping businesses establish a strong and consistent brand presence through effective visual communication. We understand that a visually appealing and cohesive brand identity plays a crucial role in attracting and engaging customers, building trust, and differentiating your brand from competitors.</p>
          <p>We can make a design manual that will include logo design, colour palette, typography, imagery style, and other graphic assets essential for your visual identity.
Our goal is to provide you with a visually compelling and cohesive brand identity that helps your business stand out, build brand recognition, and connect with your customers on a deeper level.</p>
        </div>
      </div>

    </>
  )

}

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
      </div>
      <ServiceTemplate />

      
    </div>
  );
};

export default Service;
