import { useRef, useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
/* import NavBar from "../../components/NavBar"; */
import Orgsystem from "../../assets/img/logo-org-tsplus.png";
import { useAuth } from "../../context/Auth";
// import { useState } from "react";
// import { supabase } from "../../supabaseClient";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signUp } = useAuth();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password });

    if (error) {
      alert("error signing up");
    } else {
      // Redirect user to Dashboard
      history.push("/home");
    }
  }

  return (
    <>
      {/* <NavBar showButton={false} /> */}
      <div className="login">
        <div className="header"></div>

        <div className="container">
          <div className="d-flex justify-content-center align-content-center mb-3">
            <div
              className="row login-form" /* style={{ margin: 0, marginTop: 50, width: "40%" }} */
            >
              <img src={Orgsystem} alt="Orgsystem" /* width="120" */ />
              <form onSubmit={handleSubmit} className="container">
                <h5>Teste</h5>
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
                    Cadastrar
                  </button>
                </div>
                <div id="emailHelp" className="form-text mt-2 container">
                  Para entrar clique <Link to="/">aqui</Link>.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
