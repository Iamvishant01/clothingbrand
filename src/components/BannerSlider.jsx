import React, { useEffect, useState } from 'react';

const images = [
  'https://iili.io/FJmBj3X.png',
  'https://iili.io/FJmqm2n.png',
  'https://iili.io/FJmBX4t.png'
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

  return (
    <div className="banner-slider">
      <div
        className="banner-slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
