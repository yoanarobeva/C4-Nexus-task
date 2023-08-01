import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product-grid">
            <div className="product-image">
                <Link href="#" className="image">
                    <img alt="" className="img-1" src="https://shop.ccc.eu/media/cache/gallery/rc/mo0ixmnr/images/23/2318825/5904248355975_01_rz.jpg" />
                </Link>
                <ul className="product-links">
                    <li><Link href="#"><i className="fas fa-shopping-cart"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-eye"></i></Link></li>
                </ul>
            </div>
            <div className="product-content">
                <div className="price">$77.99</div>
                <h3 className="title"><Link href="#">Women's T-Shirt</Link></h3>
                <ul className="rating">
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="far fa-star"></li>
                    <li className="far fa-star"></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;