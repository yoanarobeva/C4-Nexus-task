import "./Filter.css"

const categories = {
    undefined: ["Sandal", "Boot", "Sports Footwear", "Flip-flop", "Half Shoe", "Pump"],
    women: ["Sandal", "Boot", "Sports Footwear", "Flip-flop", "Pump"],
    men: ["Sandal", "Boot", "Sports Footwear", "Flip-flop", "Half Shoe"],
    bags: [],
    accessories: [],
};

const brands = {
    undefined: ["Quazi", "Puma", "Lasocki", "Lanetti"],
    women: ["Quazi", "Puma", "Lasocki"],
    men: ["Puma", "Lasocki", "Lanetti"],
    bags: [],
    accessories: [],
};

const colors = ["Black", "Beige", "Pink", "White", "Maroon", "Brown", "Camel"];

const seasons = ["all", "summer", "winter", "spring/autumn"];

const Filter = ({category}) => {
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
                            Category
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {categories[category].map(x => 
                                <div className="form-check" key={x}>
                                    <input className="form-check-input" type="checkbox" defaultValue={x} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {x}
                                    </label>
                                </div>
                            )}
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
                            Brand
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {brands[category].map(x => 
                                <div className="form-check" key={x}>
                                    <input className="form-check-input" type="checkbox" defaultValue={x} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {x}
                                    </label>
                                </div>
                            )}
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
                            Color
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {colors.map(x => 
                                <div className="form-check" key={x}>
                                    <input className="form-check-input" type="checkbox" defaultValue={x} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {x}
                                    </label>
                                </div>
                            )}
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
                            {seasons.map(x => 
                                <div className="form-check" key={x}>
                                    <input className="form-check-input" type="checkbox" defaultValue={x} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {x}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;