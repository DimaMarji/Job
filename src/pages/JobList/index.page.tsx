import React from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import JobCard from "../../SharedComponent/JobCard/jobCardContainer";
import {Title} from "../../Components/Atoms/Typography/Title";

const JobList: React.FC = () => {

    const {data, error, isLoading, isError} = useDataFetching(
        "job_list/get_vacancies",
    );

    console.log(data)
    return <div className={"job-list-conatiner"}>
        <Title
            className={"animate__ animate__fadeInUp animated"}
            typographyFontColor={"#05264E"}
            typographyType={{type: "bold-bold-bold", size: "48px-52px-38px"}} level={1}>
            <span
            className="color-brand-2">22 Jobs</span><br/> Available Now
        </Title>
    </div>
}

export default JobList