import React, {useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {JobsHeroSection} from "./JobsHeroSection";
import {Col, Row} from "antd";
import {JobsListSection} from "./JobsListSection";
import {Button} from "../../Components/Atoms/Button";
import FilterBy from "../../SharedComponent/FilterBy/filterByContainer";

const JobList: React.FC = () => {

    const {data, error, isLoading, isError} = useDataFetching(
        "job_list/get_vacancies",
    );

    const [filters, setFilters] = useState({
        industry: [],
        education: [],
    });

    const handleIndustryChange = (selectedValues) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            industry: selectedValues,
        }));
    };

    const handleEducationChange = (selectedValues) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            education: selectedValues,
        }));
    };

    return <div className={"job-list-container"}>
        <JobsHeroSection/>
        <Row>
            <Col lg={8}>
                <div style={{ padding: "20px", maxWidth: "300px" }}>
                    <FilterBy
                        label="Industry"
                        options={[
                            { label: "All", value: "all", count: 180 },
                            { label: "Software", value: "software", count: 12 },
                            { label: "Finance", value: "finance", count: 23 },
                            { label: "Recruiting", value: "recruiting", count: 43 },
                            { label: "Management", value: "management", count: 65 },
                            { label: "Advertising", value: "advertising", count: 76 },
                        ]}
                        onChange={handleIndustryChange}
                    />

                    <FilterBy
                        label="Minimum Education Level"
                        options={[
                            { label: "Master Degree", value: "master", count: 12 },
                            { label: "Diploma Degree", value: "diploma", count: 35 },
                            { label: "Bachelor's Degree", value: "bachelor", count: 56 },
                        ]}
                        onChange={handleEducationChange}
                    />

                    {/* Add more filters as needed */}

                    <div style={{ marginTop: "20px" }}>
                        <h3>Selected Filters:</h3>
                        <pre>{JSON.stringify(filters, null, 2)}</pre>
                    </div>
                </div>


            </Col>
            <Col lg={16}>
                <JobsListSection  data={[1,2,3,5
                ]}/>
            </Col>
        </Row>
    </div>
}

export default JobList