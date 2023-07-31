import ProductCard from "./ProductCard";

const ProductGrid = () => {
    return (
        <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductGrid;