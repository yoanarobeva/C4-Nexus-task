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
    const [sort, setSort] = useState("rating-desc");

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
        .then(() => {
            if(sort) {
                setProducts(state => {
                    if (sort === "rating-asc") {
                        state.sort((a, b) => Number(a.rating) - Number(b.rating));
                    } else if (sort === "rating-desc") {
                        state.sort((a, b) => Number(b.rating) - Number(a.rating));
                    } else if (sort === "price-asc") {
                        state.sort((a, b) => Number(a.price) - Number(b.price));
                    } else if (sort === "price-desc") {
                        state.sort((a, b) => Number(b.price) - Number(a.price));
                    }
                    return state;
                })
            }
        })
        .then(() => {
            setIsLoading(false);
        })
        .catch(err => console.error(err.message))
        
    }, [category, accessory, filters, sort]);

    useEffect(() => {
        setDisableLoadMore(false);
        if(products.length >= 20) {
            setShow(20);
        } else {
            setShow(products.length);
            setDisableLoadMore(true);
        }
    }, [products.length])
    
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
    }, []);

    const onOptionChange = useCallback((option) => {
        setSort(option);
    }, []);

    const productContextValues = useMemo(() => ({
        products,
        show,
        disableLoadMore,
        isLoading,
        setCategory,
        setAccessory,
        onLoadMore,
        onFilterAdd,
        onOptionChange,
    }), [products, show, disableLoadMore, isLoading, setCategory, setAccessory, onLoadMore, onFilterAdd, onOptionChange])

    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    );

})