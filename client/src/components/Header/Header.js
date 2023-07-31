import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={"/"} className="navbar-brand">ShoeShop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link" aria-current="page">All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link">Women's</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link">Men's</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link">Bags</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to={"/"} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accessories
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to={"/"} className="dropdown-item">Hats</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Wallets</NavLink></li>
                                <li><NavLink to={"/"} className="dropdown-item">Gloves</NavLink></li>    
                                <li><NavLink to={"/"} className="dropdown-item">Belts</NavLink></li>    
                                <li><NavLink to={"/"} className="dropdown-item">Socks</NavLink></li>    
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;