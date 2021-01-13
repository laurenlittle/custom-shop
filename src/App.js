import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';

import { auth, userProfile } from './utils/firebase';

function App() {

  const [ currentUser, setCurrentUser ] = useState(null);

  // Review/Refactor
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      if(user) {
        const userRef = await userProfile(user);

        // Get user data and update state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(user);
      }
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
