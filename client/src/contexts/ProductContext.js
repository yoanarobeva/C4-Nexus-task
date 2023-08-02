import { createContext, useState, useEffect, useCallback, useMemo, memo } from "react";

import * as productService from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = memo(({
    children
}) => {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(20);
    const [isLoading, setIsLoading] = useState(true);
    const [disableLoadMore, setDisableLoadMore] = useState(false);
    const [category, setCategory] = useState(undefined);
    const [accessory, setAccessory] = useState(undefined);

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
    
    const onLoadMore = useCallback(() => {
        if(show <= (products.length - 20)) {
            setShow(state => state + 20);
        } else {
            setShow(() => products.length);
            setDisableLoadMore(() => true);
        }
    }, [products.length, show])

    const productContextValues = useMemo(() => ({
        products,
        show,
        disableLoadMore,
        isLoading,
        setCategory,
        setAccessory,
        onLoadMore,
    }), [products, show, disableLoadMore, isLoading, setCategory, setAccessory, onLoadMore])

    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    );

})