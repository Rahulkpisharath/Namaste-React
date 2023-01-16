import logo from '../assets/images/logo.jpg';

const Header = () => {
    return (
        <div className='header-area header-fixed'>
            <div className='container'>
                <div className='header-top d-flex justify-content-between align-items-center navbar-expand-md'>
                    <div className="col menu-left">
                        <ul className='navbar-nav justify-content-center w-100'>
                            <li>
                                <a className='nav-link active' href="index.html">Home</a>

                            </li>
                            <li>
                                <a className='nav-link' href="/">menu</a>

                            </li>
                            <li> <a className='nav-link' href="/">about</a></li>
                        </ul>
                    </div>
                    <div className='col-3 logo'>
                        <a href="/">
                            <img
                                className="logo"
                                alt="Logo"
                                src={logo} />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse menu-right" id="collapsibleNavbar">
                        <ul className='navbar-nav justify-content-center w-100'>
                            <li><a href="/" className='nav-link'> Service</a></li>
                            <li><a href="/" className='nav-link'> Contact</a></li>
                            <li><a href="/" className='nav-link'> Cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;

