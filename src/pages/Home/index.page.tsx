import React from 'react';
import {homeProps} from "./interface";
import HeroSection from "./HeroSection/heroSectionContainer";
import "./style.scss"
import {BestPlaceToWorkSection} from "./BestPlaceToWorkSection";
import {TopCompanies} from "./TopCompaniesSection";
import {BrowseByCategorySection} from "./BrowseByCategorySection";
import {JobsFilterSection} from "./JobsFilterSection";
import {OurBlogsSection} from "./OurBlogsSection";
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../Constants/servicesNames";
import {BackTop} from "antd";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import ArrowUpIcon from "../../public/Assets/Images/template/icons/go-top.svg"
import Image from "next/image"
import {JobsOfTheDaySection} from "./JobsOfTheDaySection";
import {TrainingSection} from "./TrainingSection";

const HomeContainer: React.FC<homeProps> = () => {
    const {isMobileOrTablet} = useAppMediaQuery()


    const {data:countryData} = useDataFetching(
        ServicesNames.HomeByCountry,
    );

    const {data:cityData} = useDataFetching(
        ServicesNames.HomeByCity,
    );

    const JobsByCountryData:any = countryData
    const JobsByCityData:any = cityData



    return (
        <>
            <div className={"home"}>
                <HeroSection/>
                <BestPlaceToWorkSection/>
                <TopCompanies/>
                <JobsOfTheDaySection title={"Jobs of the day"} subTitle={"Search and connect with the right candidates faster."}/>
                <BrowseByCategorySection/>
                <JobsFilterSection data={JobsByCityData} title={"Jobs In Syria"} subTitle={"Find your favourite jobs and get the benefits of yourself"}/>
            <JobsFilterSection data={JobsByCountryData} title={"Jobs by Country"} subTitle={"Find your favourite jobs and get the benefits of yourself"}/>
                <TrainingSection />
                <OurBlogsSection/>


                {!isMobileOrTablet && <BackTop duration={300}>
                    <div className={"back-top"}>
                        <Image src={ArrowUpIcon}
                               width={24}
                               height={24}
                               alt={"up-arrow"}/>
                    </div>
                </BackTop>}
            </div>
        </>
    );
};

export default HomeContainer;


