import React from "react";
import "./styles.scss"
import {IJobsFilterSection} from "./interface";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {Card, List} from "antd";

const JobsFilterSection: React.FC<IJobsFilterSection> = ({
                                                             title,
                                                             subTitle,
                                                             data
                                                         }) => {
    return <div className={"jobs-filter-section"}>
        <div className={"jobs-filter-title-container"}>
            <Title
                className={"animate__ animate__fadeInUp animated"}
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

        <List className={"jobs-filter-list"} grid={{
            gutter: 24,
            xxl: 4,
            xl: 4,
            lg: 4,
            md: 3,
            sm: 2,
            xs: 1
        }} dataSource={[1, 2, 3]} renderItem={(item, index) =>
            <List.Item key={index}>
                <Card className={"jobs-filter-card hover-up"}>

                    <Title
                        className={"card-title"}
                        typographyType={{
                            type: "bold-bold-bold",
                            size: "14px-14px-14px"
                        }}>Designer</Title>
                    <Text
                        typographyType={{
                            type: "regular-regular-regular",
                            size: "14px-14px-14px"
                        }}>13 Designer</Text>
                </Card>
            </List.Item>}/>


    </div>
}

export default JobsFilterSection