import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService"

import Description from "../Description/Description";
import Filter from "../Filter/Filter";
import LoadMore from "../LoadMore/LoadMore";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Sort from "../Sort/Sort";

import './ProductsView.css'

const ProductsView = () => {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(20);
    const [isLoading, setIsLoading] = useState(true);
    const [disableLoadMore, setDisableLoadMore] = useState(false);
    const {category, accessory} = useParams();

    useEffect(() => {
        setDisableLoadMore(false);
        setShow(20);
        
        productService.getAll()
        .then((data) => {
            setProducts(data.products);  
        })
        .then(() => {
            if(category && !accessory) {
                setProducts(state => state[category]);
            } else if (category && accessory) {
                setProducts(state => state[category][accessory]);
            } else (
                setProducts(state => ([
                    ...state.women, 
                    ...state.men, 
                    ...state.bags, 
                    ...state.accessories.hats, 
                    ...state.accessories.wallets, 
                    ...state.accessories.gloves, 
                    ...state.accessories.belts, 
                    ...state.accessories.socks
                ]))
            )
            setIsLoading(false);
        })
    }, [category, accessory]);

    const onLoadMore = () => {
        if(show <= (products.length - 20)) {
            setShow(state => state + 20);
        } else {
            setShow(() => products.length);
            setDisableLoadMore(() => true);
        }
    }

    // console.log(products);
    // console.log(category, accessory);
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
                    <ProductsGrid products={products} show={show} />
                    {disableLoadMore ? null : 
                        <LoadMore onLoadMore={onLoadMore} isLoading={isLoading} disableLoadMore={disableLoadMore} />
                    }
                </div>
            </div>
        </>
    );
}

export default ProductsView;