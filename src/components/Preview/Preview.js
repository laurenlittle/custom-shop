import React from 'react';

import './style.scss';
import ShopItem from '../ShopItem/ShopItem';

const Preview = ({title, items
  }) => {

  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        { items
          .filter((item, idx) => idx < 4)
          .map(({id, ...itemProps}) => (
            <ShopItem key={id} {...itemProps} />
          ))
        }
      </div>
    </div>
  );
}

export default Preview;