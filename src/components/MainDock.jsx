import React, { useState, useEffect } from 'react';
import './style.scss';
import { FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const MainDock = () => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const dock = document.getElementById('dock');

      if (footer && dock) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Determine if the dock should fade based on the footer's visibility
        const shouldFade = footerRect.top < windowHeight && footerRect.bottom > 0;
        setIsFading(shouldFade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the scroll handler once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`dock ${isFading ? 'fade-dock' : ''}`} id="dock">
      <div className="icons">
        <i className="facebook"><FaWhatsapp /></i>
        <i className="twitter"><FaTwitter /></i>
        <i className="instagram"><FaInstagram /></i>
      </div>
    </div>
  );
};

export default MainDock;
