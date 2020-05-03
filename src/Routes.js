import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../src/components/pages/LandingPage/LandingPage';

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;