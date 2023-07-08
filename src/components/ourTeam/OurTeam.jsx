import React from "react";
import {OurTeamCard} from "./ourTeamCard/OurTeamCard";

export const OurTeam = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-end mb-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="border-start border-5 border-primary ps-4">
                            <h6 className="text-body text-uppercase mb-2">Our Team</h6>
                            <h1 className="display-6 mb-0">Our Expert Worker</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <p className="mb-0">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <OurTeamCard profession={"fsdfsdf"} fullName = {"dsfsdf"}/>
                            <OurTeamCard profession={"asdasdas"} fullName = {"asdasdasda"}/>
                            <OurTeamCard profession={"zxczxc"} fullName = {"asdasdasdasda"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}