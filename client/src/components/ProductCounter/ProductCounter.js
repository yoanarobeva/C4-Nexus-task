import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

import './ProductCounter.css'

const ProductCounter = () => {
    const {products, show} = useContext(ProductContext);
    return (
        <p className='counter'>Shown products: <span>{show}</span> out of <span>{products.length}</span></p> 
    );
}

export default ProductCounter;