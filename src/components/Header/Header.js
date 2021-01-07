import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

import './style.scss';

const Header = () => {

  return(
    <header className="header">
      <Link className="logo-container" to="/">
        {/* TODO - add logo as svg */}
        {/* <Logo className="logo" /> */}
        BaggInk
      </Link>

      <div className="nav">
        <Link className="nav-item" to="/shop" >
          Shop
        </Link>
        <Link className="nav-item" to="/contact" >
          Contact
        </Link>
        <Link className="nav-item" to="/signin" >
          Sign In
        </Link>
        <Link className="nav-item" to="/cart" >
          Cart
        </Link>
      </div>
    </header>
  );
}

export default Header;