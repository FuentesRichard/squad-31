import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Agendamento } from './pages/Agendamento'
import { Confirmacao } from './pages/Confirmacao'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home}/>
          <Route path="/agendamento" component={Agendamento}/>
          <Route path="/confirmacao" component={Confirmacao}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;