
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";
import Description from "../Description/Description";
import Filter from "../Filter/Filter";
import LoadMore from "../LoadMore/LoadMore";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Sort from "../Sort/Sort";

import './ProductsView.css'

const ProductsView = () => {
    const {category, accessory} = useParams();
    const {disableLoadMore, setCategory, setAccessory} = useContext(ProductContext);

    useEffect(() => {
        setCategory(category);
        setAccessory(accessory);
    }, [category, accessory, setAccessory, setCategory]);

    return (
        <>
            <div className="products-container">
                <div className="left-side">
                    <Filter category={category}/>
                </div>
                <div className="right-side">
                    <div className="top">
                        <Description />
                        <Sort />    
                    </div>
                    <ProductsGrid />
                    {disableLoadMore ? null : 
                        <LoadMore />
                    }
                </div>
            </div>
        </>
    );
}

export default ProductsView;