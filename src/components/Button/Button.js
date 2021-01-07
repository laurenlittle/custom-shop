import React from 'react';

import './style.scss';

const Button = ({children, type, ...props}) => {
  return(
    <button
      className="button"
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;