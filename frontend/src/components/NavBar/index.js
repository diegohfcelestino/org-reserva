import Orgsystem from '../../assets/img/logo-org-tsplus.png'

const NavBar = () => {
    return (
        <div>
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
                <div class="container-fluid">
                    <nav class="my-2 my-md-0 mr-md-3">
                        <img src={Orgsystem} alt="Orgsystem" width="120" />
                        <button class="btn btn-outline-success me-2" type="button">Inicio</button>
                        <button class="btn btn-sm btn-outline-secondary" type="button">Agendar</button>
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default NavBar;
