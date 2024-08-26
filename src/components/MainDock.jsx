import React, { useState, useEffect } from 'react';
import './style.scss';
import { FaGithub, FaBehance, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const MainDock = () => {
  const [isFading, setIsFading] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const dock = document.getElementById('dock');

      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (footer && dock) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Determine if the dock should fade based on the footer's visibility
        const shouldFade = footerRect.top < windowHeight && footerRect.bottom > 0;
        setIsFading(shouldFade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`dock ${isFading ? 'fade-dock' : ''} ${hasScrolled ? 'show-dock' : ''}`} id="dock">
      <div className="icons">
        <i className="behance">
        <a target='_blank' rel='noreferrer' href="https://www.behance.net/tookim4eeec"><FaBehance/></a>
        </i>
         <i className="github">
          <a target='_blank' rel='noreferrer' href="https://github.com/Tookim4"><FaGithub/></a>
        </i>
        <i className="twitter">
          <a href="https://x.com/KimToo13" target='_blank' rel='noreferrer'><FaTwitter/></a>
        </i>
        <i className="instagram">
          <a href="https://www.instagram.com/too_kimutai13/" target='_blank' rel='noreferrer'><FaInstagram/></a>
        </i>
        <i className="behance">
        <a target='_blank' rel='noreferrer' href="https://wa.link/acd2eh"><FaWhatsapp/></a>
        </i>
      </div>
    </div>
  );
};

export default MainDock;
