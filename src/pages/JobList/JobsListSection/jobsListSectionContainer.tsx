import React, {useState} from "react";
import "./styles.scss"
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Col, List, Row} from "antd";
import {IJobsListSectionProps} from "./interface";
import {Button} from "../../../Components/Atoms/Button";
import {Text} from "../../../Components/Atoms/Typography/Text";
import JobCard from "../../../SharedComponent/JobCard/jobCardContainer";
import Image from "next/image";
import SingleGridIcon from "../../../public/Assets/Images/template/icons/icon-list.svg"


const JobsListSection: React.FC<IJobsListSectionProps> = ({data}) => {
    const {isMobileOrTablet} = useAppMediaQuery()
    const [viewType, setViewType] = useState<"grid" | "single">("single")


    console.log(viewType)

    return <div className={"job-list"}>
        <div>

            <Text typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}
                  typographyFontColor={"#4F5E64"}>
                Showing <b>41-60</b> of <b>944 </b> jobs
            </Text>
       <Image onClick={() => {
            setViewType("single")
        }} src={SingleGridIcon} alt={"single"}/>

        <Button onClick={() => {
            setViewType("grid")
        }
        }>
            Grid
        </Button>
        </div>

        {viewType == "grid" ? <List
            id={viewType}
            className={`jobs-of-day-list ${viewType}`}
            grid={{
                gutter: 24,
                xxl: 3,
                xl: 3,
                lg: 3,
                sm: 1,
                xs: 1,
            }}
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item key={index}>
                    <JobCard data={item}/>
                </List.Item>
            )}
        /> : <Row  className={`jobs-of-day-list ${viewType}`}
                     gutter={24}>{data?.map((item, index) =>
            <Col key={index} span={24}>
                <JobCard data={item}/>
            </Col>
        )}
        </Row>}


    </div>
}

export default JobsListSection