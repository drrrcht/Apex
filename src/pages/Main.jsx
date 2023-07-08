import React from "react";
import {Carousel} from "../components/carousel/Carousel";
import {SectionAbout} from "../components/sectionAbout/SectionAbout";
import {Facts} from "../components/facts/Facts";
import {Features} from "../components/features/Features";
import {OurServices} from "../components/ourServices/OurServices";
import {Appointment} from "../components/appointment/Appointment";
import {OurTeam} from "../components/ourTeam/OurTeam";
import {Testimonial} from "../components/testimonial/Testimonial";

export const Main = () => {
    return (
        <>
            <Carousel />
            <SectionAbout />
            <Facts />
            <Features />
            <OurServices />
            <Appointment />
            <OurTeam />
            <Testimonial />
        </>
    )
}