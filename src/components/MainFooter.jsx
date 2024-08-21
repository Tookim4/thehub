import React, { useState, useEffect } from 'react';
import './style.scss';
import { FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const MainFooter = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the footer is in the viewport
        const visible = footerRect.top < windowHeight && footerRect.bottom > 0;
        setIsFooterVisible(visible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`footer-div ${isFooterVisible ? 'footer-visible' : ''}`} id='footer'>
      <div className={`background-fill ${isFooterVisible ? 'fill-background' : ''}`}></div>
      <div className={`icons ${isFooterVisible ? 'show-icons' : ''}`}>
        <i className="facebook"><a href=""><FaWhatsapp /></a></i>
        <i className="twitter"><a href="https://x.com/KimToo13"><FaTwitter /></a></i>
        <i className="instagram"><a href="https://www.instagram.com/too_kimutai13/"><FaInstagram /></a></i>
      </div>
      <hr className="footer-hr" />
      <p>dEATHsTROKE | tookim4@gmail.com</p>
    </div>
  );
};

export default MainFooter;
