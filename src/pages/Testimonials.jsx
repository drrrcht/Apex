import React from "react";
import {Testimonial} from "../components/testimonial/Testimonial";
import {PageHeaderStart} from "../components/pageHeaderStart/PageHeaderStart";

export const Testimonials = (props) => {
    return (
        <>
            <PageHeaderStart headerText = {props.headerText} />
            <Testimonial />
        </>
    );
}