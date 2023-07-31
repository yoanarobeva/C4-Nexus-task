import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">ShoeShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link" aria-current="page">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/women"} className="nav-link">Women's</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/men"} className="nav-link">Men's</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/bags"} className="nav-link">Bags</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to={"/accessories"} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accessories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to={"/accessories/hats"} className="dropdown-item">Hats</Link></li>
                                <li><Link to={"/accessories/wallets"} className="dropdown-item">Wallets</Link></li>
                                <li><Link to={"/accessories/gloves"} className="dropdown-item">Gloves</Link></li>    
                                <li><Link to={"/accessories/belts"} className="dropdown-item">Belts</Link></li>    
                                <li><Link to={"/accessories/socks"} className="dropdown-item">Socks</Link></li>    
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;