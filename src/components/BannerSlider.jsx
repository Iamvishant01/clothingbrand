import React, { useEffect, useState } from 'react';

const images = [
  { src: 'https://iili.io/FJmBj3X.png', link: 'https://example1.com' },
  { src: 'https://iili.io/FJmqm2n.png', link: 'https://example2.com' },
  { src: 'https://iili.io/FJmBX4t.png', link: 'https://example3.com' }
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds per slide

    return () => clearInterval(slideInterval);
  }, []);

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="banner-slider">
      <div
        className="banner-slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} style={{ flex: '0 0 100%' }}>
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              className="banner-image"
              onClick={() => handleClick(img.link)}  // Click to open the link
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
