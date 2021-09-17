import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Agendamento from '../pages/Agendamento';
import Home from '../pages/Home';

const DayOfficeRoutes : React.FC = () => {
    
    return (
        <Switch>
            <Route path="/" exact component={Home} />    
            <Route path="/home" component={Home} />    
            <Route path="/agendamento" component={Agendamento} />  
        </Switch>
    );
}

export default DayOfficeRoutes;