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
    const [filters, setFilters] = useState([]);

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
        .then(() => {
            if(filters.length !== 0) {
                setProducts(state => {
                    let filtered = [];
                    filters.forEach(filter => {
                        filtered = [...filtered, ...state.filter(x => Object.values(x).includes(filter))]
                    });
                    return filtered;
                })
            }   
        })
    }, [category, accessory,filters]);
    
    const onLoadMore = useCallback(() => {
        if(show <= (products.length - 20)) {
            setShow(state => state + 20);
        } else {
            setShow(() => products.length);
            setDisableLoadMore(() => true);
        }
    }, [products.length, show]);

    const onFilterAdd = useCallback((isChecked, value) => {
        if (isChecked) {
            setFilters(state => ([...state, value]));
        } else {
            setFilters(state => state.filter(x => x !== value));
        }
    }, [])

    const productContextValues = useMemo(() => ({
        products,
        show,
        disableLoadMore,
        isLoading,
        setCategory,
        setAccessory,
        onLoadMore,
        onFilterAdd
    }), [products, show, disableLoadMore, isLoading, setCategory, setAccessory, onLoadMore, onFilterAdd])

    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    );

})