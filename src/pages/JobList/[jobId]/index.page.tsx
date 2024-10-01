import "./styles.scss"
import {GetServerSideProps} from "next";
import {replaceDashesWithSpaces} from "../../../Helpers/String/helpers";
import {isEmpty} from "lodash";

const JobDetails =()=>{
return <div className={"job-details"}>

</div>

}


export const getServerSideProps: GetServerSideProps<{ data: any, error: any }> = async ({query, req}) => {
    const jobId: any = await replaceDashesWithSpaces(String(query.blogTitle)).split(" ").join('%20')

    try {
        const _res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}job_details/get_job_by_id/${jobId}`);

        const data: any = await _res.json()

        return {
            props: {
                data: isEmpty(data.data.items) ? [] : data.data.items[0],
                error: !data.meta.success ? data?.meta : null
            },
        }

    } catch (error) {

        return {
            redirect: {
                permanent: false,
                destination: "/error"
            }
        };
    }
}

export default JobDetails