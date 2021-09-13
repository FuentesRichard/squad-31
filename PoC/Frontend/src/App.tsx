import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Agendamento } from './pages/Agendamento'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/home" component={Home}/>
          <Route path="/agendamento" component={Agendamento}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;