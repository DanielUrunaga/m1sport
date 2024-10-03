import logo from '../../img/logo.jpg';
import CartWidget from './CartWidget';

function Navbar() { 
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="30" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">Uniformes</a>
                            <a className="nav-link" href="#">Indumentaria</a>
                            <a className="nav-link" href="#">Calzado</a>
                        </div>
                    </div>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;