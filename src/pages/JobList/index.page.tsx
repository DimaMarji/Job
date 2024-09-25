import React, {useEffect, useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {JobsHeroSection} from "./JobsHeroSection";
import {Col, Row} from "antd";
import {JobsListSection} from "./JobsListSection";
import FilterColumn from "../../SharedComponent/FilterColumn/filterColumnContainer";

const JobList: React.FC = () => {

    const [jobListData, setJobListData] = useState<any>()
    const [filters, setFilters] = useState({
        job_activity_id: [],
        degree_type_id: [],
        job_type_id:[]
    });

    const {data, error, isLoading, isError, isSuccess} = useDataFetching(
        "job_list/get_vacancies"
    );

    const {data:filteredData} = useDataFetching(
        "job_list/vacancies/filter",
        filters,{},
        ['job_list/vacancies/filter', filters] as any
    );

    // Update job list data when filtered data is available
    useEffect(() => {
        if (filteredData) {
            setJobListData(filteredData?.data);
        }
    }, [filteredData]);



    useEffect(() => {
        setJobListData(data?.data)
    }, [isSuccess])

    return <div className={"job-list-container"}>
        <JobsHeroSection/>
        <Row>
            <Col lg={8}>
                <FilterColumn filters={filters} setFilters={setFilters}/>

            </Col>
            <Col lg={16}>
                <JobsListSection data={jobListData}/>
            </Col>
        </Row>
    </div>
}

export default JobList