import { BrowserRouter, Route, Switch } from "react-router-dom";

/* import SalasCadastro from "./components/Cadastros/Salas";
 */import Main from "./components/Main";
import HomeAgendamentos from "./pages/Agendamentos/HomeAgendamentos";
import Cadastros from "./pages/Cadastros";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Main>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cadastros">
            <Cadastros />
          </Route>
          <Route path="/agendamento">
            <HomeAgendamentos />
          </Route>
        </Main>

      </Switch>

    </BrowserRouter>
  );
}

export default Routes;