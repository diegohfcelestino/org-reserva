import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import '../../assets/css/styles.css'

const classes = {
    open: "animated-icon1 open",
    closed: "animated-icon1"
}
const NavBar = () => {

    /*  $(document).ready(function () {
 
         $('.first-button').on('click', function () {
 
             $('.animated-icon1').toggleClass('open');
         });
 
     }); */
    const [toggle, setToggle] = useState(false)

    const [toggleText, setToggleText] = useState(classes.closed)

    function handleToggle() {
        setToggle(!toggle)


    }

    useEffect(() => {
        if (!toggle) {
            setToggleText(classes.closed)
        }
        if (toggle) {
            setToggleText(classes.open)
        }
    }, [toggle])

    return (
        <div>
            <nav className="navbar navbar-light amber lighten-4 p-3">
                {/* <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-light border-bottom shadow-sm">
                <div class="container-fluid">
                    <nav class="my-2 my-md-0 mr-md-3">
                        <Link to="/">
                            <img src={Orgsystem} alt="Orgsystem" width="120" />
                        </Link>
                    </nav>

                </div>
            </div> */}


                {/* <div className="navbar-brand">
                    <Link to="/">
                        <img src={Orgsystem} alt="Orgsystem" width="120" />
                    </Link>
                </div> */}
                <a className="navbar-brand" href="/">
                    <img src={Orgsystem} alt="Orgsystem" width="120" />
                </a>

                <button
                    className="navbar-toggler first-button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent20"
                    aria-controls="navbarSupportedContent20"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <div className={toggleText}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent20">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div >
    )
}

export default NavBar;
