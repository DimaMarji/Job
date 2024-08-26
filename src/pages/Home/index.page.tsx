import React from 'react';
import {homeProps} from "./interface";
import HeroSection from "./HeroSection/heroSectionContainer";
import {AboutUsSection} from "./AboutUsSection";
import "./style.scss"


const HomeContainer: React.FC<homeProps> = () => {


    return (
        <>
            <div className={"home"}>
                <HeroSection/>
                <AboutUsSection/>
            </div>
        </>
    );
};

export default HomeContainer;


