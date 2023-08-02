import { useContext, useState } from "react";
import "./Sort.css"
import { ProductContext } from "../../contexts/ProductContext";

const Sort = () => {
    const [selected, setSelected] = useState("rating-desc");
    const {onOptionChange} = useContext(ProductContext);

    const onOptionChangeHandler = (e) => {
        const optionValue = e.target.value;
        onOptionChange(optionValue);
        setSelected(optionValue);
    }
    return (
        <div className="select-container sort">
            <h6>Sort</h6>
            <select onChange={onOptionChangeHandler} value={selected} className="form-select" aria-label="Default select example">
                <option value="rating-asc">Rating 0-5</option>
                <option value="rating-desc">Rating 5-0</option>
                <option value="price-asc">Price ascending</option>
                <option value="price-desc">Price descending</option>
            </select>
        </div>
    );
}

export default Sort;