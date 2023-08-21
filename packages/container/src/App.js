import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
const generateClassName = createGenerateClassName({ productionPrefix: 'con' });
import Header from './components/Header';
import { createBrowserHistory } from 'history';

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
import Progress from './components/Progress';

const browserHistory = createBrowserHistory();

export default () => {
  const [isSignedIn, setSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      browserHistory.push('/dashboard');
    }
  }, [isSignedIn]);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={browserHistory}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy}>
                <MarketingLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};
