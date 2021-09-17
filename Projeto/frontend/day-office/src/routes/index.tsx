import { useIsAuthenticated } from '@azure/msal-react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

import SignIn from '../pages/SignIn';
import DayOfficeRoutes from './DayOfficeRoutes';

const Routes: React.FC = () => {

  const isAuthenticated = useIsAuthenticated();

  if(isAuthenticated){
    return (
      <>
        <Header/>
        <DayOfficeRoutes/>
      </>
    )
  }
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />    
    </Switch>
  );
}

export default Routes;
