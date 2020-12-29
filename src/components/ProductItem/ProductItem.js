import React from 'react';
import './style.scss';

const ProductItem = ({ title, imageUrl }) => {
  return (
    <div
      style={{backgroundImage: `url(${imageUrl})`}}
      className="product-item"
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Get Started</span>
      </div>
    </div>
  );
};

export default ProductItem;