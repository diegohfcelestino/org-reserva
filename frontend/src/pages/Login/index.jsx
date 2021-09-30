import { useRef, useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
/* import NavBar from "../../components/NavBar"; */
import Orgsystem from "../../assets/img/logo-org-tsplus.png";
import { useAuth } from "../../context/Auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signIn } = useAuth();

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    //pega email e senha dos inputs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //chama a função signIn do contexto
    const { error } = await signIn({ email, password });

    if (error) {
      alert("Error signing in");
    } else {
      history.push("/home");
    }
  }

  return (
    <>
      {/* <NavBar showButton={false} /> */}
      <div className="login">
        <div className="header"></div>

        <div className="container">
          <div className="title"></div>
          <div className="d-flex justify-content-center align-content-center mb-3">
            <div
              className="row login-form" /* style={{ margin: 0, marginTop: 50, width: "40%" }} */
            >
              <img src={Orgsystem} alt="Orgsystem" /* width="120" */ />
              <form onSubmit={handleLogin} className="container">
                <h6>Informe seu usuário e senha para acessar</h6>
                <div className="mb-4  loginInputGroup">
                  <FiUser className="loginIcon" size="25px" color="#555555" />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    ref={emailRef}
                    placeholder="Usuário"
                  />
                </div>
                <div className="mb-3 loginInputGroup">
                  <FiLock className="loginIcon" size="25px" color="#555555" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="senha"
                    ref={passwordRef}
                    placeholder="Senha"
                  />
                  <button
                    type="button"
                    color="blue"
                    className="show-password"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <FiEyeOff size="14pt" />
                    ) : (
                      <FiEye size="14pt" />
                    )}
                  </button>
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Lembrar senha</label>
                </div> */}
                <div className="loginButtonGroup">
                  <button type="submit" className="btn btn-primary">
                    Entrar
                  </button>
                </div>
                <div id="emailHelp" className="form-text mt-2 container">
                  <h5>
                    Para ter acesso clique <Link to="/signUp">aqui</Link>.
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
