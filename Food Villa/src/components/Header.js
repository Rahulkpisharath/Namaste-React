import logo from '../assets/images/logo.jpg';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header-area header-fixed'>
            <div className='container'>
                <div className='header-top d-flex justify-content-between align-items-center navbar-expand-md'>
                    <div className="col menu-left">
                        <ul className='navbar-nav justify-content-center w-100'>
                            <Link className='nav-link' to='/'>
                                <li>Home</li>
                            </Link>
                            <Link className='nav-link' to="/">
                                <li>
                                    Menu
                                </li>
                            </Link>
                            <Link className='nav-link' to='/about'>
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='col-3 logo'>
                        <Link to="/">
                            <img
                                className="logo"
                                alt="Logo"
                                src={logo} />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse menu-right" id="collapsibleNavbar">
                        <ul className='navbar-nav justify-content-center w-100'>
                            <Link className='nav-link' to='/'>
                                <li>Service</li>
                            </Link>
                            <Link className='nav-link' to='/'>
                                <li>Contact</li>
                            </Link>
                            <Link className='nav-link' to='/'>
                                <li> Cart</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;

