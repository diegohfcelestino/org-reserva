import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Login = () => {

    function logar() {
        var email = document.getElementById("email");
        var senha = document.getElementById("senha");

        if (email.value === "admin@admin.com" && senha.value === "123") {
            localStorage.setItem("acesso", true);
            window.location.href = "main";
        } else {
            alert("Usuário ou senha inválidos");
        }
    }

    return (
        <>
            <NavBar />
            <div class="login">
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <h2 class="display-5 text-dark mt-3">Controle de agendamento de veiculos e salas</h2>
                    </div>

                    <div class="d-flex justify-content-center mb-3">
                        <div class="row login-form" style={{ margin: 0, marginTop: 50, width: "40%" }}>
                            <form class="container">
                                <div class="mb-4">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="senha" class="form-label">Senha</label>
                                    <input type="password" class="form-control" id="senha" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    <a class="cadastrar" href="/cadastro.html">Cadastrar</a>
                                </div>

                            </form>
                            <button onClick={() => logar()} type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;