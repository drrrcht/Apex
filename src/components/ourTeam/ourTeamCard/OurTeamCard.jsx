import React from "react";

export const OurTeamCard = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item position-relative">
                    <img className="img-fluid" src={require("../../../img/team-1.jpg")} alt=""/>
                    <div className="team-text bg-white p-4">
                        <h5>{props.fullName}</h5>
                        <span>{props.profession}</span>
                    </div>
                </div>
            </div>

        </>
    )
}