import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/* import SalasCadastro from "./components/Cadastros/Salas";
 */import Main from "./components/Main";
import { AuthProvider, useAuth } from "./context/Auth";
import { NavBarProvider } from "./context/NavBarContext";
import HomeAgendamentos from "./pages/Agendamentos/HomeAgendamentos";
import Cadastros from "./pages/Cadastros";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp/SignUp";
// import Auth from "./pages/Login/Auth";
import Videos from "./pages/Videos/Videos";

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        //Renderiza a pagina somente se user existir
        //Caso contrário, redireciona para a página de login
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}
const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signUp" component={SignUp} />
          <NavBarProvider>
            <Main>
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/cadastros" component={Cadastros} />
              <PrivateRoute exact path="/agendamento" component={HomeAgendamentos} />
              <PrivateRoute exact path="/videos" component={Videos} />
            </Main>
          </NavBarProvider>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routes;