import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
const Login = () => {


    return (
        <>
            <NavBar />
            <div class="container">
                <div class="jumbotron">
                    <h1 class="display-4 text-secondary">Controle de agendamento de veiculos e salas</h1>
                </div>
                <Link class="btn btn-primary btn-lg" to="/main">
                    Acessar App
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Login;