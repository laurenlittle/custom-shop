import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (

    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
