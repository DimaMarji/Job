import React, {useEffect, useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {JobsHeroSection} from "./JobsHeroSection";
import {Col, Divider, Row, Select} from "antd";
import {JobsListSection} from "./JobsListSection";
import FilterBy from "../../SharedComponent/FilterBy/filterByContainer";
import {ServicesNames} from "../../Constants/servicesNames";
import {dataToOptions} from "./helper";
import {Title} from "../../Components/Atoms/Typography/Title";
import {Text} from "../../Components/Atoms/Typography/Text";

const JobList: React.FC = () => {

    const [jobListData, setJobListData] = useState<any>()

    const {data, error, isLoading, isError, isSuccess} = useDataFetching(
        "job_list/get_vacancies",
    );

    const {data: industryData} = useDataFetching(
        ServicesNames.AllIndustry,
    );

    const {data: educationLevelData} = useDataFetching(
        ServicesNames.EducationLevel,
    );

    const {data: jobTypesData} = useDataFetching(
        ServicesNames.JobTypes,
    );
    const {data: locationsData} = useDataFetching(
        ServicesNames.HomeByCity,
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

    useEffect(() => {
        setJobListData(data?.data)
    }, [isSuccess])

    return <div className={"job-list-container"}>
        <JobsHeroSection/>
        <Row>
            <Col lg={8}>
                <div style={{padding: "20px", maxWidth: "300px"}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <Title
                            typographyFontColor={"#05264E"}
                            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "14px-14px-14px"}} level={6}>
                            Advanced Filter
                        </Title>
                        <Text
                            typographyFontColor={"#66789C"}
                            typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                            Reset
                        </Text>

                    </div>
                    <Divider className={"filter-divider"}/>

                    <Select placeholder={"Location"}
                            className={"sider-location-select"} options={dataToOptions(locationsData)}/>
                    <FilterBy
                        label="Industry"
                        options={dataToOptions(industryData?.data)}
                        onChange={handleIndustryChange}
                    />

                    <FilterBy
                        label="Minimum Education Level"
                        options={dataToOptions(educationLevelData?.data)}
                        onChange={handleEducationChange}
                    />
                    <FilterBy
                        label="Job type"
                        options={dataToOptions(jobTypesData?.data)}
                        onChange={handleEducationChange}
                    />

                    <div style={{marginTop: "20px"}}>
                        <h3>Selected Filters:</h3>
                        <pre>{JSON.stringify(filters, null, 2)}</pre>
                    </div>
                </div>


            </Col>
            <Col lg={16}>
                <JobsListSection data={jobListData}/>
            </Col>
        </Row>
    </div>
}

export default JobList