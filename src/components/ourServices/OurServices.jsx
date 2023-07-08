import React from "react";
import {OurServicesCard} from "./ourServicesCard/OurServicesCard";

export const OurServices = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-end mb-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="border-start border-5 border-primary ps-4">
                            <h6 className="text-body text-uppercase mb-2">Our Services</h6>
                            <h1 className="display-6 mb-0">
                                Construction And Renovation Solutions
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                        <a className="btn btn-primary py-3 px-5" href="">More Services</a>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <OurServicesCard headerOfCard = {"Building Construction"} mainText = {"Tempor erat elitr rebum at clita dolor diam ipsum sitamet diam et eos"}/>
                            <OurServicesCard headerOfCard = {"Home Maintainance"} mainText = {"Tempor erat elitr rebum at clita dolor diam ipsum sitamet diam et eos"}/>
                            <OurServicesCard headerOfCard = {"Renovation and Painting"} mainText = {"Tempor erat elitr rebum at clita dolor diam ipsum sitamet diam et eos"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}