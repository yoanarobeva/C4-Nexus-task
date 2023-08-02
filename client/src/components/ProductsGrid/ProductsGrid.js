import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

import "./ProductsGrid.css";

const ProductsGrid = () => {
    const {products, show} = useContext(ProductContext);
    
    return (
        <div className="row">
            {products.length !== 0 ? 
                products.slice(0,show).map(x => <ProductCard key={x._id} {...x}/>) 
                : 
                <h2>There are no products!</h2>
            }
        </div>
    );
}

export default ProductsGrid;