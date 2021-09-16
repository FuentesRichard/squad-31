import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import { useAutenticacao } from '../hooks/auth';

import SignIn from '../pages/SignIn';
import DayOfficeRoutes from './DayOfficeRoutes';

const Routes: React.FC = () => {

  const { user } = useAutenticacao();

  if(user.user){
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
