
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";
import Description from "../Description/Description";
import Filter from "../Filter/Filter";
import LoadMore from "../LoadMore/LoadMore";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Sort from "../Sort/Sort";

import './ProductsView.css'
import ProductCounter from "../ProductCounter/ProductCounter";
import Spinner from "../Spinner/Spinner";

const ProductsView = () => {
    const {category, accessory} = useParams();
    const {disableLoadMore, setCategory, setAccessory, isLoading} = useContext(ProductContext);

    useEffect(() => {
        setCategory(category);
        setAccessory(accessory);
    }, [category, accessory, setAccessory, setCategory]);

    return (
        <div className="products-container">
            {isLoading ? <Spinner /> :
                <>
                    <div className="left-side">
                        <Filter category={category}/>
                    </div>
                    <div className="right-side">
                        <div className="top">
                            <Description category={category}/>
                            <Sort />    
                        </div>
                        <ProductCounter />
                        <ProductsGrid />
                        {disableLoadMore ? null : 
                            <LoadMore />
                        }
                    </div>
                </>
            }
        </div>
        
    );
}

export default ProductsView;