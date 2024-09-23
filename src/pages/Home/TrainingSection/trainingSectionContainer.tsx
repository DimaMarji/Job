import React from "react";
import "./styles.scss"
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

const TrainingSection: React.FC<IJobsOfTheDayAndTraining> = ({
                                                                            }) => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const {data, error, isLoading, isError} = useDataFetching(
        ServicesNames.HomeTrainingCourse,
    );

    const TrainingCourseData:any = data?.data

    return <div>
        <div className={"jobs-of-day-title-container"}>
            <Title
                className={"jobs-of-day-title animate__ animate__fadeInUp animated"}
                typographyFontColor={"#05264E"}
                typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
                Training Course
            </Title>

            <Text
                className={"animate__ animate__fadeInUp animated"}
                typographyFontColor={"#66789C"}
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
                Search and connect with the right course faster.
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
        }} dataSource={TrainingCourseData} renderItem={(item:any, index) =>
            <List.Item key={index}>
                <Card className={"jobs-of-day-card hover-up"}
                                         title={<><Space>
                                             <Image alt={"company-logo"}
                                                    className={"company-logo-image"} width={52} height={52} src={item?.logo}/>
                                             <Space direction={"vertical"} align={"start"}>
                                                 <Title
                                                     typographyType={{
                                                         type: "semi-bold-semi-bold-semi-bold",
                                                         size: "18px-18px-18px"
                                                     }}>{item?.title}</Title>
                                                 <Space>
                                                     <Image alt={"location-icon"}
                                                            width={12}
                                                            src={LocationIcon}/>
                                                     <Text
                                                         typographyType={{
                                                             type: "regular-regular-regular",
                                                             size: "12px-12px-12px"
                                                         }}
                                                         typographyFontColor={"#A0ABB8"}>
                                                        {`${item?.city}, ${item?.country}`}
                                                     </Text>
                                                 </Space>
                                             </Space>
                                         </Space> <Image alt={"flash-icon"}
                                                         className={"flash-icon"} src={FlashIcon}/>
                                         </>}>

                <Title
                    typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "16px-16px-16px"
                    }}>UI Ux Designer</Title>
                <div className={"job-info"}>
                    <Space>
                        <Image alt={"location-icon"}
                               width={12}
                               src={LocationIcon}/>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Damascus
                        </Text>
                    </Space>
                    <Space>
                        <Image alt={"location-icon"}
                               width={12}
                               src={LocationIcon}/>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Damascus
                        </Text>
                    </Space>
                </div>
                <Text
                    className={"job-details-text"}
                    typographyFontColor={"#4F5E64"}
                    typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo
                    repellendus pariatur
                </Text>
            </Card>
            </List.Item>}/>


    </div>

}

export default TrainingSection