import { useEffect, useState } from "react";

import * as productService from "../../services/productService"

import Description from "../Description/Description";
import Filter from "../Filter/Filter";
import LoadMore from "../LoadMore/LoadMore";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Sort from "../Sort/Sort";

import './ProductsView.css'

const ProductsView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(data => {
                setProducts(data.products);
                console.log(data.products);
            })
    }, [])
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
                    <ProductsGrid />
                    <LoadMore />
                </div>
            </div>
        </>
    );
}

export default ProductsView;