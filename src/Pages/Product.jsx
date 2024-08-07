import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const { title, img, desc } = location.state || {};

  return (
    <div>
      <h1>Product Details</h1>
      {title && (
        <div>
          <img src={img} alt={title} style={{ height: 140 }} />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      )}
      {!title && <p>No product details available.</p>}
    </div>
  );
}

export default Product;
