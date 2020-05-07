import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../src/components/pages/LandingPage/LandingPage';
import About from '../src/components/pages/About/About';
import Support from '../src/components/pages/Support/Support';

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' exact component={About} />
        <Route path='/support' exact component={Support} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;