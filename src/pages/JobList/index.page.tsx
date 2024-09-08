import React from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import JobCard from "../../SharedComponent/JobCard/jobCardContainer";

const JobList: React.FC = () => {

    const {data, error, isLoading, isError} = useDataFetching(
        "job_list/get_vacancies",
    );

    console.log(data)
    return <div>
        <JobCard jobId={"3534"} jobTitle={"Title"} tags={["ASFs", "fdgfsd"]}
                 views={24} jobType={"type"} companyName={"Company"}
                 educationLevel={"level"} location={"location"}
                 postedDate={"date"}/>
    </div>
}

export default JobList