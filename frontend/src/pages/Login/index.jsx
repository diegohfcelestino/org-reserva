import Footer from "../../components/Footer";
/* import NavBar from "../../components/NavBar"; */
import Orgsystem from '../../assets/img/logo-org-tsplus.png'

const Login = () => {

    function logar() {
        var email = document.getElementById("email");
        var senha = document.getElementById("senha");

        if (email.value === "admin@admin.com" && senha.value === "123") {
            localStorage.setItem("acesso", true);
            window.location.href = "/home";
        } else {
            alert("Usuário ou senha inválidos");
        }
    }

    return (
        <>
            {/* <NavBar showButton={false} /> */}
            <div className="login">
                <div className="header">

                </div>
                <div className="title">
                    <h2 /* className="display-5 text-light" */>Controle de agendamento de veiculos e salas</h2>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center align-content-center mb-3">

                        <div className="row login-form" /* style={{ margin: 0, marginTop: 50, width: "40%" }} */>
                            <img src={Orgsystem} alt="Orgsystem" /* width="120" */ />
                            <form className="container">
                                <div className="mb-4">

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Não compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="senha" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="senha" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Lembrar senha</label>

                                </div>

                            </form>
                            <button onClick={() => logar()} type="button" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
