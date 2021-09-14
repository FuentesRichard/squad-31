import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Agendamento } from './pages/Agendamento'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home}/>
          <Route path="/agendamento" component={Agendamento}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;