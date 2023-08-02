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
    const {category, accessory} = useParams();

    useEffect(() => {
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
        })
    }, [category, accessory]);

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
                    <LoadMore />
                </div>
            </div>
        </>
    );
}

export default ProductsView;