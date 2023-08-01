import "./Filter.css"

const Filter = () => {
    return (
        <>
            <h4>Filter</h4>

            <div className="select-container">
                <h6>Brand</h6>
                <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
                    {/* Make it dynamic */}
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="select-container">
                <h6>Color</h6>
                <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
                    {/* Make it dynamic */}
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Brand
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="check-container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="one" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    One
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="two" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Two
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="three" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Three
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;