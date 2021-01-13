import React, { useState } from 'react';

import { signInWithGoogle } from '../../utils/firebase';

import './style.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SignIn = () => {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginInfo(
      {
        ...loginInfo,
        [name]: value
      }
    )
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handle submit')
  }

  return(
    <div className="signin">
      <h1 className="signin-title">Already have an account?</h1>
      <h2 className="signin-subtitle"> Sign in with email and password below:</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={loginInfo.email}
          handleChange={handleChange}
          required
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={loginInfo.password}
          handleChange={handleChange}
          required
        />

        <div className="button-group">
          <Button type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            googleSignIn
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>

  );
}

export default SignIn;