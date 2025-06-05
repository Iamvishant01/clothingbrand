import React, { useRef } from 'react';

const categories = [
  { name: 'Sports', count: 20, image: 'https://iili.io/FJpFeM7.jpg', link: '/category/sports' },
  { name: 'Sunglass', count: 20, image: 'https://iili.io/FJpFkP9.jpg', link: '/category/sunglass' },
  { name: 'Bags', count: 20, image: 'https://iili.io/FJpFr9j.jpg', link: '/category/bags' },
  { name: 'Sneakers', count: 20, image: 'https://iili.io/FJpF6wQ.jpg', link: '/category/sneakers' },
  { name: 'Caps', count: 16, image: 'https://iili.io/FJpATWg.jpg', link: '/category/caps' },
  { name: 'Sportswear', count: 19, image: 'https://iili.io/FJpAusa.jpg', link: '/category/sportswear' },
  { name: 'Perfumes', count: 10, image: 'https://iili.io/FJpAIzF.jpg', link: '/category/perfumes' },
  { name: 'Incense', count: 10, image: 'https://iili.io/FJpAIzF.jpg', link: '/category/incense' }
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
          <a href={cat.link} className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-info poppins">
              <span>{cat.name}</span>
              <span className="category-badge lexend">{cat.count}</span>
            </div>
          </a>
        ))}
      </div>

      <button className="cat-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default CategorySlider;
