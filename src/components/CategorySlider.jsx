import React, { useRef } from 'react';

const categories = [
  { name: 'Sports', count: 20, image: 'https://iili.io/FJpFeM7.jpg' },
  { name: 'Sunglass', count: 20, image: 'https://iili.io/FJpFkP9.jpg' },
  { name: 'Bags', count: 20, image: 'https://iili.io/FJpFr9j.jpg' },
  { name: 'Sneakers', count: 20, image: 'https://iili.io/FJpF6wQ.jpg' },
  { name: 'Caps', count: 16, image: 'https://iili.io/FJpATWg.jpg' },
  { name: 'Sportswear', count: 19, image: 'https://iili.io/FJpAusa.jpg' },
  { name: 'Perfumes', count: 10, image: 'https://iili.io/FJpAIzF.jpg' },
  { name: 'insence', count: 10, image: 'https://iili.io/FJpAIzF.jpg' } // Add more
];

const CategorySlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -250 : 250;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="category-slider-wrapper">
      <button className="cat-btn left" onClick={() => scroll('left')}>&lt;</button>

      <div className="category-slider" ref={sliderRef}>
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-info">
              <span>{cat.name}</span>
              <span className="category-badge">{cat.count}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="cat-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default CategorySlider;
