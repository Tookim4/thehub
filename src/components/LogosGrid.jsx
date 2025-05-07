import React, { useState, useEffect } from "react";

const LogosGrid = ({ images = [], title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let interval;
    
    if (isHovered && images.length > 0) {
      interval = setInterval(() => {
        setFade(true); // start fade out
        setTimeout(() => {
          setCurrentIndex(prev => (prev + 1) % images.length);
          setFade(false); // start fade in
        }, 200); // wait for fade-out before image switch
      }, 800); // total time per cycle
    } else {
      // Only reset fade state when hover ends, but keep the current image
      setFade(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images.length]);

  // If images array is empty, don't render anything
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className="grid-items"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className={`logo-img ${fade ? "fade" : ""}`}
        src={images[currentIndex]} 
        alt={title || "Logo"}
      />
      <section className="logo-info">
        <h5>{title}</h5>
      </section>
    </div>
  );
};

export default LogosGrid;