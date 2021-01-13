import React from 'react';

import './style.scss';

const Button = ({children, googleSignIn, ...props}) => {
  return(
    <button
      className={`${googleSignIn ? 'google-button' : ''} button`}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;