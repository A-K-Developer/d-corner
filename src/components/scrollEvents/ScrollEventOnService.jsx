import React, { useEffect, useRef } from 'react';
import { services } from '../../utils/constants';

const ServiceSection = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {

        const visServiceElements = entry.target.getElementsByClassName('VisService');
        Array.from(visServiceElements).forEach((visService) => {
          visService.classList.add('fade-in');
        });
      } else {
    
        const visServiceElements = entry.target.getElementsByClassName('VisService');
        Array.from(visServiceElements).forEach((visService) => {
          visService.classList.remove('fade-in');
        });
      }
    };
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as per your requirement
    };

    const observer = new IntersectionObserver(handleScroll, options);

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div className="services" ref={serviceRef}>
      <div className="service">
        <h3>{services[0]}</h3>
        <div className="serviceContainer">
          <h1>{services[1]}</h1>
          <div className="VisService">
            <p>{services[2]}</p>
            <p>{services[3]}</p>
            <p>{services[4]}</p>
            <p>{services[5]}</p>
            <div className="backgroundLinear"></div>
          </div>
        </div>
        <div className="serviceContainer">
          <h1>{services[6]}</h1>
          <div className="VisService">
            <div className="backgroundLinear"></div>
            <p>{services[7]}</p>
            <p>{services[8]}</p>
            <p>{services[9]}</p>
            <p>{services[10]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
