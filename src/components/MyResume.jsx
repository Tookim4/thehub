import React, { useState, useRef, useEffect } from 'react';
import './style.scss';

// import { quantum } from 'ldrs'

const MyResume = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null)
  const [iframeWidth, setIframeWidth] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  // quantum.register()

  const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: '0 auto', // Center the container horizontally
    overflow: 'hidden',
  };

  const iframeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    border: 'none',
    padding: 0,
    margin: 0,
    background: 'none',
    color: '#fff',
    // maxWidth: '550px',
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', closePopup);
    } else {
      document.removeEventListener('mousedown', closePopup);
    }

    return () => {
      document.removeEventListener('mousedown', closePopup);
    };
  }, [isPopupVisible]);


  useEffect(() => {
    const iframe = document.getElementById('canvaIframe');
    
    if (iframe) {
      // Get the width and height of the iframe content
      const contentWidth = iframe.contentWindow.document.body.scrollWidth;
      const contentHeight = iframe.contentWindow.document.body.scrollHeight;

      // Set the state with the content dimensions
      setIframeWidth(contentWidth);
      setIframeHeight(contentHeight);
    }
  }, []);


  return (
    <div className='resume-div'>
      <button className='resume-btn' onClick={togglePopup}>CV</button>
      


        {isPopupVisible && (
          <div className="overlay">
            <div ref={popupRef} className="popup">
              <div style={containerStyle}>
                <iframe
                  loading="lazy"
                  style={iframeStyle}
                  src="https://www.canva.com/design/DAFxUy9ezUY/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title='my cv'
                />
              </div>
            </div>
      </div>
      )}
    </div>
  );
};

export default MyResume;
