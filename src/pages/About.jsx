import React from "react";
import {PageHeaderStart} from "../components/pageHeaderStart/PageHeaderStart";
import {SectionAbout} from "../components/sectionAbout/SectionAbout";
import {OurTeam} from "../components/ourTeam/OurTeam";

export const About = () => {
    return (
        <>
            <PageHeaderStart headerText = "About Us" />
            <SectionAbout />
            <OurTeam />
        </>
    )
}