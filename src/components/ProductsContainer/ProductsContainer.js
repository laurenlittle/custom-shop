import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

import './style.scss';

const ProductsContainer = () => {

  const [productCategories, setProductCategories] = useState([
    {
      title: 'T-shirts',
      linkUrl: 'tshirts',
      id: 1,
    },
    {
      title: 'hoodies',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'hoodies',
      id: 2,
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/4grXBvK/pexels-tim-eiden-1374370.jpg',
      linkUrl: 'hats',
      id: 3,
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'womens',
      id: 4,
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/M1JV3Lk/pexels-wallace-chuck-2834921.jpg',
      linkUrl: 'mens',
      size: 'large',
      id: 5,
    },
  ]);

  return (
    <div className="product-container">
      {productCategories.map(({ id, ...productProps }) => (
          <ProductItem key={id} {...productProps} />
        ))}
    </div>
  );
};

export default ProductsContainer;