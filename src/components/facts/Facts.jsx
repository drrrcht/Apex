import React from "react";

export const Facts = () => {
    return (
        <div className="container-fluid my-5 p-0">
            <div className="row g-0">
                <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={require("../../img/fact-1.jpg")} alt=""/>
                        <div className="facts-overlay">
                            <h1 className="display-1">01</h1>
                            <h4 className="text-white mb-3">Construction</h4>
                            <p className="text-white">
                                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                clita duo justo erat amet
                            </p>
                            <a className="text-white small" href=""
                            >READ MORE<i className="fa fa-arrow-right ms-3"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={require("../../img/fact-2.jpg")} alt=""/>
                        <div className="facts-overlay">
                            <h1 className="display-1">02</h1>
                            <h4 className="text-white mb-3">Mechanical</h4>
                            <p className="text-white">
                                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                clita duo justo erat amet
                            </p>
                            <a className="text-white small" href=""
                            >READ MORE<i className="fa fa-arrow-right ms-3"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={require("../../img/fact-3.jpg")} alt=""/>
                        <div className="facts-overlay">
                            <h1 className="display-1">03</h1>
                            <h4 className="text-white mb-3">Architecture</h4>
                            <p className="text-white">
                                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                clita duo justo erat amet
                            </p>
                            <a className="text-white small" href=""
                            >READ MORE<i className="fa fa-arrow-right ms-3"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={require("../../img/fact-4.jpg")} alt=""/>
                        <div className="facts-overlay">
                            <h1 className="display-1">04</h1>
                            <h4 className="text-white mb-3">Interior Design</h4>
                            <p className="text-white">
                                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                clita duo justo erat amet
                            </p>
                            <a className="text-white small" href=""
                            >READ MORE<i className="fa fa-arrow-right ms-3"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}