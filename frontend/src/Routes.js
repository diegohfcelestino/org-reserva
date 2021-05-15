import { BrowserRouter, Route, Switch } from "react-router-dom";
import SalasCadastro from "./components/Cadastros/Salas";
import Main from "./components/Main";
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
          <Route path="/cadastros/salas">
            <SalasCadastro />
          </Route>
        </Main>

      </Switch>

    </BrowserRouter>
  );
}

export default Routes;