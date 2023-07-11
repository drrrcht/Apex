import React from "react";
import {PageHeaderStart} from "../components/pageHeaderStart/PageHeaderStart";
import {OurServices} from "../components/ourServices/OurServices";
import {Appointment} from "../components/appointment/Appointment";

export const Service = (props) => {
    return (
        <>
            <PageHeaderStart headerText = {props.headerText} />
            <OurServices />
            <Appointment />
        </>
    );

}