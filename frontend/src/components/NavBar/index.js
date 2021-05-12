import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'

const NavBar = () => {

    /*  $(document).ready(function () {
 
         $('.first-button').on('click', function () {
 
             $('.animated-icon1').toggleClass('open');
         });
 
     }); */
    return (

        <div>

            {/* <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-light border-bottom shadow-sm">
                <div class="container-fluid">
                    <nav class="my-2 my-md-0 mr-md-3">
                        <Link to="/">
                            <img src={Orgsystem} alt="Orgsystem" width="120" />
                        </Link>
                    </nav>

                </div>
            </div> */}

            <nav class="navbar navbar-light amber lighten-4 mb-4">

                <div class="container-fluid">
                    <nav class="my-2 my-md-0 mr-md-3">
                        <Link to="/">
                            <img src={Orgsystem} alt="Orgsystem" width="120" />
                        </Link>
                    </nav>

                </div>

                <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
                    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="animated-icon1"><span></span><span></span><span></span></div>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent20">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Pricing</a>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    );
}

export default NavBar;
