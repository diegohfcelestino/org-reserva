import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cursos from "./components/Cadastros/Cursos";
import VideosCadastro from "./components/Cadastros/Videos/VideosCadastro";
import VideosManager from "./components/Cadastros/Videos/VideosManager";
import Main from "./components/Main";
import { AgendamentoProvider } from "./context/AgendamentoContext";
import { AuthProvider, useAuth } from "./context/Auth";
import { CursoProvider } from "./context/cadastros/CursosContext";
import { ItemsProvider } from "./context/cadastros/ItemsContext";
import { StorageProvider } from "./context/cadastros/StorageContext";
import { VideoProvider } from "./context/cadastros/VideosContext";
import { NavBarProvider } from "./context/NavBarContext";
import HomeAgendamentos from "./pages/Agendamentos/HomeAgendamentos";
import CadastrosItems from "./pages/Cadastros/CadastroItem";
import HomeCadastros from "./pages/Cadastros/HomeCadastros";
import HomeCursos from "./pages/Cursos/HomeCursos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ponto from "./pages/Ponto";
import SignUp from "./pages/SignUp/SignUp";
import Videos from "./pages/Videos/Videos";


export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        //Renderiza a pagina somente se user existir
        //Caso contrário, redireciona para a página de login
        return user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
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
              <ItemsProvider>
                <PrivateRoute exact path="/cadastros" component={HomeCadastros} />
                <PrivateRoute exact path="/cadastros-itens" component={CadastrosItems} />
                <AgendamentoProvider>
                  <PrivateRoute exact path="/agendamento" component={HomeAgendamentos} />
                </AgendamentoProvider>
              </ItemsProvider>
              <StorageProvider>
                <CursoProvider>
                  <VideoProvider>
                    <PrivateRoute exact path="/cadastros-videos" component={VideosCadastro} />
                    <PrivateRoute exact path="/videos" component={Videos} />
                    <PrivateRoute exact path="/gerenciar-videos" component={VideosManager} />
                  </VideoProvider>
                  <PrivateRoute exact path="/cadastros-cursos" component={Cursos} />
                  <PrivateRoute exact path="/cursos" component={HomeCursos} />
                </CursoProvider>
              </StorageProvider>
              <PrivateRoute exact path="/ponto" component={Ponto} />
            </Main>
          </NavBarProvider>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
