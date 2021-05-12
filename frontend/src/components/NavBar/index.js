import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'

const NavBar = () => {
    return (
        <div>
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
                <div class="container-fluid">
                    <nav class="my-2 my-md-0 mr-md-3">
                        <Link to="/">
                            <img src={Orgsystem} alt="Orgsystem" width="120" />
                        </Link>
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default NavBar;
