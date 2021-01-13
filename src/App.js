import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import { auth } from './utils/firebase';

function App() {

  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth();
  }, [currentUser])

  return (
    <>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={AuthPage} />
    </Switch>
    </>
  );
}

export default App;
