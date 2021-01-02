import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';

const ProductItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} product-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{backgroundImage: `url(${imageUrl})`}}
      >
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Get Started</span>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);