import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

export default Routes;