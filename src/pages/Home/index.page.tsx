import React from 'react';
import {homeProps} from "./interface";
import HeroSection from "./HeroSection/heroSectionContainer";
import "./style.scss"
import {BestPlaceToWorkSection} from "./BestPlaceToWorkSection";
import {TopCompanies} from "./TopCompaniesSection";
import {JobsOfTheDayAndTrainingSection} from "./JobsOfTheDayAndTrainingSection";
import {BrowseByCategorySection} from "./BrowseByCategorySection";
import {JobsFilterSection} from "./JobsFilterSection";


const HomeContainer: React.FC<homeProps> = () => {


    return (
        <>
            <div className={"home"}>
                <HeroSection/>
                <BestPlaceToWorkSection/>
                <TopCompanies/>
                <JobsOfTheDayAndTrainingSection title={"Jobs of the day"} subTitle={"Search and connect with the right candidates faster."}/>
                <BrowseByCategorySection/>
                <JobsFilterSection title={"Jobs In Syria"} subTitle={"Find your favourite jobs and get the benefits of yourself"}/>
            <JobsFilterSection title={"Jobs by Country"} subTitle={"Find your favourite jobs and get the benefits of yourself"}/>
                <JobsOfTheDayAndTrainingSection title={"Training Course"} subTitle={"Search and connect with the right course faster."}/>
            </div>
        </>
    );
};

export default HomeContainer;


