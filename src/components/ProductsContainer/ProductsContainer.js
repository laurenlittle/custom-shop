import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

import './style.scss';

const ProductsContainer = () => {

  const [productCategories, setProductCategories] = useState([
    {
      title: 'hatssss',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5
    }
  ]);

  return (
    <div className="product-container">
      {productCategories.map(({ title, imageUrl, id, size }) => (
          <ProductItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
    </div>
  );
};

export default ProductsContainer;