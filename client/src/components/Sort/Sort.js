import "./Sort.css"

const Sort = () => {
    return (
        <div className="select-container sort">
            <h6>Sort</h6>
            <select className="form-select" aria-label="Default select example">
                <option selected>Alphabetical A-Z</option>
                {/* Make it dynamic */}
                <option defaultValue="1">Alphabetical Z-A</option>
                <option defaultValue="2">Price ascending</option>
                <option defaultValue="3">Price descending</option>
            </select>
        </div>
    );
}

export default Sort;