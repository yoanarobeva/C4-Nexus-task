import "./Sort.css"

const Sort = () => {
    return (
        <div className="select-container sort">
            <h6>Sort</h6>
            <select className="form-select" aria-label="Default select example">
                <option defaultValue="1">Alphabetical A-Z</option>
                {/* Make it dynamic */}
                <option defaultValue="2">Alphabetical Z-A</option>
                <option defaultValue="3">Price ascending</option>
                <option defaultValue="4">Price descending</option>
            </select>
        </div>
    );
}

export default Sort;