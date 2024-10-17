import React from "react";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {Card, List, Space} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import Image from "next/image";
import LogoImage from "../../../public/Assets/Images/template/bg-newsletter.svg";
import LocationIcon from "../../../public/Assets/Images/template/icons/location.svg";
import FlashIcon from "../../../public/Assets/Images/template/icons/flash.svg";
import {IJobsOfTheDayAndTraining} from "./interface";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../../Constants/servicesNames";
import JobCard from "../../../SharedComponent/JobCard/jobCardContainer";

const JobsOfTheDaySection: React.FC<IJobsOfTheDayAndTraining> = ({title,
                                                                            subTitle,
                                                                            }) => {
    const {isMobile} = useAppMediaQuery()

    const {data, error, isLoading, isError} = useDataFetching(
        ServicesNames.HomeTodayJob,
    );

    const JobsOfTheDayData:any = data?.data

    return <div>
        <div className={"jobs-of-day-title-container"}>
            <Title
                className={"jobs-of-day-title animate__ animate__fadeInUp animated"}
                typographyFontColor={"#05264E"}
                typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
                {title}
            </Title>

            <Text
                className={"animate__ animate__fadeInUp animated"}
                typographyFontColor={"#66789C"}
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
                {subTitle}
            </Text>
        </div>
        <List className={"jobs-of-day-list"} grid={{
            gutter: 24,
            xxl: 4,
            xl: 4,
            lg: 4,
            md: 3,
            sm: 2,
            xs: 1
        }} dataSource={JobsOfTheDayData} renderItem={(item, index) =>
            <List.Item key={index}>

<JobCard viewType={isMobile?"single":"grid"} data={item}/>

            </List.Item>}/>


    </div>

}

export default JobsOfTheDaySection