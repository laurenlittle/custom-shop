import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (

    <Switch>
      <Route exact path='/' component={LandingPage} />
      {/* <Route path='/' component={LandingPage} /> */}
    </Switch>
  );
}

export default App;
