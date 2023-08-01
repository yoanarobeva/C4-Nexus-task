import Description from "../Description/Description";
import Filter from "../Filter/Filter";
import LoadMore from "../LoadMore/LoadMore";
import ProductGrid from "../ProductGrid/ProductGrid";
import Sort from "../Sort/Sort";

import './ProductsView.css'

const ProductsView = () => {
    return (
        <>
            <div className="products-container">
                <div className="left-side">
                    <Filter />
                </div>
                <div className="right-side">
                    <div className="top">
                        <Description />
                        <Sort />    
                    </div>
                    <ProductGrid />
                    <LoadMore />
                </div>
            </div>
        </>
    );
}

export default ProductsView;