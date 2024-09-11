import React, {useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {JobsHeroSection} from "./JobsHeroSection";
import {Col, Row} from "antd";
import {JobsListSection} from "./JobsListSection";
import {Button} from "../../Components/Atoms/Button";

const JobList: React.FC = () => {

    const {data, error, isLoading, isError} = useDataFetching(
        "job_list/get_vacancies",
    );


    return <div className={"job-list-container"}>
        <JobsHeroSection/>
        <Row>
            <Col lg={8}>

            </Col>
            <Col lg={16}>

                <JobsListSection  data={[1,2,3,5
                ]}/>
            </Col>
        </Row>
    </div>
}

export default JobList