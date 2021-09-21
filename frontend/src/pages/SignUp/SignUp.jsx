import Footer from "../../components/Footer";
/* import NavBar from "../../components/NavBar"; */
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import { useRef, /* useState */ } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
// import { useState } from "react";
// import { supabase } from "../../supabaseClient";

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signUp } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value



    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing up')
    } else {
      // Redirect user to Dashboard
      history.push('/home')
    }
  }

  return (
    <>
      {/* <NavBar showButton={false} /> */}
      <div className="login">
        <div className="header">

        </div>

        <div className="container">
          <div className="title">
            <h2>
              Agendamento de salas e veículos
            </h2>
          </div>
          <div className="d-flex justify-content-center align-content-center mb-3">

            <div className="row login-form" /* style={{ margin: 0, marginTop: 50, width: "40%" }} */>
              <img src={Orgsystem} alt="Orgsystem" /* width="120" */ />
              <form onSubmit={e => handleSubmit(e)} className="container">
                <div className="mb-4">

                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    ref={emailRef}
                  />
                  <div id="emailHelp" className="form-text">Não compartilharemos seu e-mail com mais ninguém.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    className="form-control"
                    ref={passwordRef}
                  />
                  {/* <div id="emailHelp" className="form-text">Solicite a senha ao seu gestor.</div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Lembrar senha</label> */}
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <div id="emailHelp" className="form-text mt-2">
                  Already have an account? <Link to="/">Log In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignUp;
