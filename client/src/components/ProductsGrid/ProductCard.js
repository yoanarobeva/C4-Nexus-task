import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({
    _id,
    brand,
    model,
    color,
    category,
    season,
    rating,
    price,
    img,
}) => {
    return (
        <div className="product-grid">
            <div className="product-image">
                <Link href="#" className="image">
                    <img alt={model} className="img-1" src={img} />
                </Link>
                <ul className="product-links">
                    <li><Link onClick={() => alert("Product added to cart.")}><i className="fas fa-shopping-cart"></i></Link></li>
                    <li><Link onClick={() => alert("Product details page should display")}><i className="fa fa-eye"></i></Link></li>
                </ul>
            </div>
            <div className="product-content">
                <div className="price">{price} BGN</div>
                <h3 className="title"><Link href="#">{category} {brand}</Link></h3>
                <p className="text">{model} | {color} | {season}</p>
                <ul className="rating">
                    {[...Array(Math.round(Number(rating)))].map((e, i) => <li className="fas fa-star" key={i}></li>) }
                    {[...Array(5-Math.round(Number(rating)))].map((e, i) => <li className="far fa-star" key={i}></li>) }
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;