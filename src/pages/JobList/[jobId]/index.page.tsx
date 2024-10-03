import "./styles.scss";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { replaceDashesWithSpaces } from "../../../Helpers/String/helpers";
import { isEmpty } from "lodash";

const JobDetails = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <div className={"job-details"}>{data ? JSON.stringify(data) : "No job details available"}</div>;
};

export const getServerSideProps: GetServerSideProps<{ data: any, error?: any }> = async ({ query }) => {
    const jobId: any = query?.jobId;
    console.log(query?.jobId);

    try {
        const _res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}job_details/get_job_by_id/${jobId}`, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4MTk3MDY5LCJpYXQiOjE3Mjc3NjUwNjksImp0aSI6ImNlMjc4NzljMTYxNTRjYzJiMTA2ZDM2YTk3NjZlZTIzIiwidXNlcl9pZCI6ImYxZDE4NWQyLTRmZjctNGE2MC05OWU1LTQ5Y2I5MDhlN2U4ZCJ9.K87voNzeWYT-RL8yqHAlfBmPwgEyOI0HnqVSw7b28mI`, // Send token in Authorization header
            }})
        const json = await _res.json(); // Parsing the response body as JSON
        const data = json?.data ?? null; // Fallback to `null` if `data` is undefined

        console.log(data);

        if (!data) {
            return {
                notFound: true, // Return a 404 page if no data is found
            };
        }

        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);

        return {
            redirect: {
                permanent: false,
                destination: "/error",
            },
        };
    }
};

export default JobDetails;
