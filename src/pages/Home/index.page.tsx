import React from 'react';
import {homeProps} from "./interface";
import HeroSection from "./HeroSection/heroSectionContainer";
import "./style.scss"
import {BestPlaceToWorkSection} from "./BestPlaceToWorkSection";
import {TopCompanies} from "./TopCompaniesSection";
import {JobsOfTheDaySection} from "./JobsOfTheDaySection";
import {BrowseByCategorySection} from "./BrowseByCategorySection";


const HomeContainer: React.FC<homeProps> = () => {


    return (
        <>
            <div className={"home"}>
                <HeroSection/>
                <BestPlaceToWorkSection/>
                <TopCompanies/>
                <JobsOfTheDaySection/>
                <BrowseByCategorySection/>
            </div>
        </>
    );
};

export default HomeContainer;


