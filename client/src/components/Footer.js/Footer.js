import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center fixed-bottom text-lg-start bg-light text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"><i className="fas fa-gem me-3"></i>ShoeShop</h6>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nobis expedita modi dolore cupiditate voluptas earum a nemo, 
                                laborum deleniti alias, neque dolor ex quod tenetur omnis ipsa 
                                aut dolorum vel.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p><Link to={"/"} className="text-reset">All</Link></p>
                            <p><Link to={"/women"} className="text-reset">Women's</Link></p>
                            <p><Link to={"/men"} className="text-reset">Men's</Link></p>
                            <p><Link to={"/bags"} className="text-reset">Bags</Link></p>
                            <p><Link to={"/accessories"} className="text-reset">Accessories</Link></p>
                        </div>
                        
                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p><Link to={"/"} className="text-reset">Privacy Policy</Link></p>
                            <p><Link to={"/"} className="text-reset">Delivery</Link></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
               </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2023 Copyright
            </div>
        </footer>
    );
}

export default Footer;