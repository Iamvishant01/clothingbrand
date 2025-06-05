import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const featuredData = [
  {
    title: 'Bags',
    link:'',
    images: [
      'https://i.pinimg.com/736x/de/b5/c8/deb5c84aaeec8ba1b2a920bf5a9c353c.jpg',
      'https://i.pinimg.com/736x/66/d0/36/66d036a3ba16c15e244f9770708da505.jpg',
      'https://i.pinimg.com/736x/f1/5d/4c/f15d4c0c2de0817eb8c8c45777def306.jpg',
    ],
  },
  {
    title: 'Shoes',
    link:'',
    images: [
      'https://i.pinimg.com/736x/db/01/2f/db012fd60339968b453e80949f68d25d.jpg',
      'https://i.pinimg.com/736x/ee/46/fd/ee46fd37a561b8127f5e1c8017a6ea43.jpg',
      'https://i.pinimg.com/736x/a6/f2/9b/a6f29b7fca8733dbda7b008207be2025.jpg',
    ],
  },
  {
    title: 'Wallets',
    link:'',
    images: [
      'https://i.pinimg.com/736x/7b/72/a5/7b72a51043921a17e13cd7cee9785d4b.jpg',
      'https://i.pinimg.com/736x/20/00/f7/2000f7352320aec1936a7f47345895cb.jpg',
      'https://i.pinimg.com/736x/66/e8/67/66e867a26c0adffcc7e6829a062dfbc9.jpg',
    ],
  },
  {
    title: 'Jewellers',
    link:'',
    images: [
      'https://i.pinimg.com/736x/51/b5/2f/51b52f17e903318e2e9b645ef338352a.jpg',
      'https://i.pinimg.com/736x/0d/f1/bc/0df1bcccfda5434eecc6657b51d03954.jpg',
      'https://i.pinimg.com/736x/74/4d/2b/744d2b8607924c238b72484171df70f1.jpg',
    ],
  },
  {
    title: 'Watches',
    link:'https://iamvishant.netlify.app',
    images: [
      'https://i.pinimg.com/736x/2c/1b/65/2c1b651f544f81e831d5014652f3fd74.jpg',
      'https://i.pinimg.com/736x/f5/21/ce/f521ce727e111fdc556b1f4b27d75c5e.jpg',
      'https://i.pinimg.com/736x/06/47/98/064798530354aa43688cd7d93f862053.jpg',
    ],
  },
  {
    title: 'Sun Glasses',
    link:'',
    images: [
      'https://i.pinimg.com/736x/5b/d2/c9/5bd2c9abc116d0a5f438f82cb2b662fd.jpg',
      'https://i.pinimg.com/736x/1c/bf/ea/1cbfea745e87d9f9353ff754a7f6eb74.jpg',
      'https://i.pinimg.com/736x/da/26/89/da26898bf26ffbf5c083a09a636af581.jpg',
    ],
  },
];

const FeaturedProducts = () => {
  return (
<div className="container my-5">
  <h4 className="fw-bold mb-4 text-start lexend">Featured Categories</h4>
  <div className="row">
    {featuredData.map((category, idx) => (
      <div className="col-md-4 col-sm-6 mb-4" key={idx}>
        <a href={category.link} className="text-decoration-none text-dark">
          <div className="border rounded p-3 h-100 category-hover">
            <h6 className="mb-3 text-start poppins">{category.title}</h6>
            <div className="d-flex justify-content-between gap-2">
              {category.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={category.title}
                  className="img-fluid rounded"
                  style={{
                    width: '30%',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>
  );
};

export default FeaturedProducts;
