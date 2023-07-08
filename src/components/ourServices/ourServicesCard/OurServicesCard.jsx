import React from "react";

export const OurServicesCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src={require("../../../img/service-2.jpg")} alt=""/>
                <div className="service-text position-relative text-center h-100 p-4">
                    <h5 className="mb-3">{props.headerOfCard}</h5>
                    <p>{props.mainText}</p>
                    <a className="small" href=""
                    >READ MORE<i className="fa fa-arrow-right ms-3"></i
                    ></a>
                </div>
            </div>
        </div>
    );
}