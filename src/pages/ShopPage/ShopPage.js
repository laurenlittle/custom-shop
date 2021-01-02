import React, { useState } from 'react';
import './style.scss';

import collectionData from '../../common/collectionData';
import Preview from '../../components/Preview/Preview';

function ShopPage() {

  const [shopCollections, setShopCollections] = useState(collectionData);

  return (
    <div className="shop-page">
      {
        shopCollections.map(({ id, ...collectionProps }) => (
          <Preview key={id} {...collectionProps}/>
        ))
      }
    </div>
  )
}

export default ShopPage;
