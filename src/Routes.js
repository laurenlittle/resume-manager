import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../src/components/pages/LandingPage/LandingPage';
import About from '../src/components/pages/About/About';
import Support from '../src/components/pages/Support/Support';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SignIn from './components/pages/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' exact component={About} />
        <Route path='/support' exact component={Support} />
        <Route path='/signin' exact component={SignIn} />
        <PrivateRoute path='/dashboard' exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;