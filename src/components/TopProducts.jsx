import React, { useState, useEffect } from 'react';

const topProducts = [
  {
    name: 'Maniac Red Boys',
    price: '$15.00',
    oldPrice: '$20.00',
    desc: 'Sporty essentials, these Under Armour pieces combine comfort and performance.',
    image: 'data:image/jpeg;base64,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',
    link:'https://iamvishant.netlify.app/'
  },
  {
    name: 'H&M Global Desi',
    price: '$30.00',
    oldPrice: '$40.00',
    desc: 'Blue solid woven regular top with a curved hemline, designed for a comfortable fit.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQm5gzExJUtRyGo0hiTCfBQg1S1CfGno0M_Q&s',
    link: 'https://www.instagram.com/iamvishant01'
  },
  {
    name: 'Polarised Wayfarer Sunglasses',
    price: '$20.00',
    oldPrice: '$35.00',
    desc: 'This item is only exchangeable for the same product within 7 days of purchase, provided it is unused.',
    image: 'data:image/jpeg;base64,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',
    link:'https://os.me/'
  },
  {
    name: 'Adidas Track Pants',
    price: '$25.00',
    oldPrice: '$30.00',
    desc: 'Comfortable and trendy sportswear designed to keep you active .',
    image: 'data:image/jpeg;base64,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',
    link:'https://app.netlify.com/teams/iamvishant01/overview'
  }
];

const TopProductsFlashSale = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % topProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tp-container">
      <div className="top-products">
        <div className="tp-header">
          <h4 className='open-sans'>Top Products</h4>
          <span className="see-all">See All</span>
        </div>
        <div className="tp-grid">
          {topProducts.map((product, i) => (
            <div className="tp-card" key={i}>
              <a href={product.link}><img src={product.image} alt={product.name} /></a>
              <div className="tp-info">
                <a href={product.link} className='text-decoration-none text-black poppins'>
                  <h5>{product.name}</h5>
                  <p>{product.desc}</p>
                </a>
                <div className="tp-price lexend">
                  <span className="new">{product.price}</span>
                  <span className="old">{product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flash-sale">
        <div className="fs-header">
          <h4 className='open-sans'>Flash Sale</h4>
        </div>
        <a href={topProducts[slideIndex].link} className='text-black text-decoration-none'>
          <div className="fs-carousel">
            <img src={topProducts[slideIndex].image} alt="Flash Product" />
            <div className="fs-info">
              <h5 className='lexend'>{topProducts[slideIndex].name}</h5>
              <p className='poppins'>{topProducts[slideIndex].desc}</p>
              <div className="fs-price lexend">
                <span className="new">{topProducts[slideIndex].price}</span>
                <span className="old">{topProducts[slideIndex].oldPrice}</span>
              </div>
              <div className="fs-progress">
                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${(slideIndex + 1) * 25}%` }}
                  ></div>
                </div>
                <span>{25 * (slideIndex + 1)}% Sold</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopProductsFlashSale;
