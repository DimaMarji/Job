import React, { useEffect, useState, useMemo } from "react";
import "./styles.scss";
import { useDataFetching } from "../../ReactQuery/ApiCrud/useDataFetching";
import { JobsHeroSection } from "./JobsHeroSection";
import { Col, Row } from "antd";
import { JobsListSection } from "./JobsListSection";
import FilterColumn from "../../SharedComponent/FilterColumn/filterColumnContainer";

const JobList: React.FC = () => {
    const [jobListData, setJobListData] = useState<any>([]);

    const [filters, setFilters] = useState({
        job_activity_id: [],
        degree_type_id: [],
        job_type_id: [],
    });

    const [searchValues, setSearchValues] = useState({
        job_activity_id: undefined,
        title: undefined,
        location_id: undefined,
    });

    // Fetch job list data
    const { data, isSuccess: isSuccessJobs, isLoading: isLoadingJobs } = useDataFetching(
        "job_list/get_vacancies"
    );

    // Fetch filtered data
    const { data: filteredData, isSuccess: filteredIsSuccess, isLoading: isLoadingFiltered } = useDataFetching(
        "job_list/vacancies/filter",
        filters,
        {},
        ["job_list/vacancies/filter", filters]
    );

    // Fetch search result data
    const { data: searchResultData, isSuccess: searchIsSuccess, isLoading: isLoadingSearch } = useDataFetching(
        "job_list/vacancies/search",
        searchValues,
        {},
        ["job_list/vacancies/search", searchValues]
    );

    // Handle search input and trigger search query
    const onSearch = (value: any) => {
        setFilters({
            job_activity_id: [],
            degree_type_id: [],
            job_type_id: [],
        })
        setSearchValues(value);
    };

    // Determine the most relevant job list data to display
    const relevantJobListData = useMemo(() => {
        if (searchIsSuccess && searchResultData) {
            // Show search results if available
            return searchResultData.data;
        }
        if (filteredIsSuccess && filteredData) {
            // Show filtered results if available
            return filteredData.data;
        }
        if (isSuccessJobs && data) {
            // Show default job list data if no search or filter is applied
            return data.data;
        }
        return [];
    }, [searchIsSuccess, searchResultData, filteredIsSuccess, filteredData, isSuccessJobs, data]);

    // Update job list data whenever the relevant data changes
    useEffect(() => {
        setJobListData(relevantJobListData);
    }, [relevantJobListData]);

    return (
        <div className="job-list-container">
            <JobsHeroSection onSearch={onSearch} />
            <Row>
                <Col lg={8}>
                    <FilterColumn filters={filters} setFilters={setFilters} />
                </Col>
                <Col lg={16}>
                    {/* Display a loading indicator when any of the fetches are in progress */}
                    {isLoadingJobs || isLoadingFiltered || isLoadingSearch ? (
                        <div>Loading...</div>
                    ) : (
                        <JobsListSection data={jobListData} />
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default JobList;
