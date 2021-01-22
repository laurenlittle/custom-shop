import React, { useState } from 'react';

import { auth, userProfile } from '../../utils/firebase';

import './style.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SignUp = () => {

  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    displayName: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpInfo(
      {
        ...signUpInfo,
        [name]: value
      }
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password, displayName, confirmPassword } = signUpInfo;

    if (password !== confirmPassword) {
      alert('Passwords must match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await userProfile(user, { displayName });

      // Clear form once successful
      setSignUpInfo({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
      });

    } catch (err) {
        console.error('Error Signing up:', err );
    }
  }

  return(
    <div className="signup">
      <h1 className="signup-title">I do not have an account</h1>
      <h2 className="signup-subtitle"> Sign up with email and password below:</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          id="display-name"
          type="text"
          name="displayName"
          value={signUpInfo.displayName}
          handleChange={handleChange}
          required
        />
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={signUpInfo.email}
          handleChange={handleChange}
          required
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={signUpInfo.password}
          handleChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          value={signUpInfo.confirmPassword}
          handleChange={handleChange}
          required
        />
        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>

  );
}

export default SignUp;