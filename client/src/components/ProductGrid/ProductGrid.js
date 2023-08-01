import ProductCard from "./ProductCard";

import "./ProductGrid.css";

const ProductGrid = () => {
    return (
        <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductGrid;