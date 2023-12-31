import React from "react";
import {PageHeaderStart} from "../components/pageHeaderStart/PageHeaderStart";
import {Features} from "../components/features/Features";
import {Testimonial} from "../components/testimonial/Testimonial";

export const Feature = (props) => {
    return (
        <>
            <PageHeaderStart headerText = {props.headerText} />
            <Features />
            <Testimonial />
        </>
    );
}