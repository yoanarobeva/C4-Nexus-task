import "./Filter.css"

const Filter = () => {
    return (
        <>
            <h4>Filter</h4>

            <div className="accordion" id="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="false" 
                            aria-controls="collapseOne"
                        >
                            Brand
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="one" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    One
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="two" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Two
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="three" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Three
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                        >
                            Color
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="one" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    One
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="two" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Two
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="three" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Three
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                        >
                            Category
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="one" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    One
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="two" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Two
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="three" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Three
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFour" 
                            aria-expanded="false" 
                            aria-controls="collapseFour"
                        >
                            Season
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="one" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    One
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="two" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Two
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="three" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
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