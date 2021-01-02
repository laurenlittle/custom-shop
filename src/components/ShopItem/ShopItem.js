import React from 'react';

import './style.scss';

const ShopItem = ({ id, name, price, imageUrl}) => {

  return(
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
      </div>
      <div className="collection-details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}

export default ShopItem;