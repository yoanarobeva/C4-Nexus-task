import ProductCard from "./ProductCard";

import "./ProductsGrid.css";

const ProductsGrid = () => {
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

export default ProductsGrid;