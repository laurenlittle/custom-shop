import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={AuthPage} />
    </Switch>
    </>
  );
}

export default App;
