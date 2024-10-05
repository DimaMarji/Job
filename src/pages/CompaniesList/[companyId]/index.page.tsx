import React from "react";
import "./styles.scss"
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import Image from "next/image";
import CompanyHeaderImage from "../../../public/Assets/Images/page/company/img.png"
import {Col, Divider, Row, Space} from "antd";
import {Title} from "../../../Components/Atoms/Typography/Title";
import LocationIcon from "../../../public/Assets/Images/template/icons/location.svg";
import {Text} from "../../../Components/Atoms/Typography/Text";
import JobCard from "../../../SharedComponent/JobCard/jobCardContainer";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";

const CompanyDetails:React.FC= ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const { data :latestJobsData, isSuccess: isSuccessJobs, isLoading: isLoadingJobs } = useDataFetching(
        "job_list/get_vacancies"
    );

    return <div className={"company-details-page"}>
        <Image className="company-details-header" alt="company details" src={CompanyHeaderImage}/>
        <div  className={"company-info"}>

        <Space direction={"vertical"} align="start">
            <Image className="comaony-logo" width={85} height={85} src={data?.logo} alt="logo"/>
            <Space style={{gap:"42px"}}>
                <Title
                    typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "18px-16px-16px",
                    }}>
                    {data?.company_name ?? "Confidential"}
                </Title>
                <Space>
                    <Image alt={"location-icon"} width={12} src={LocationIcon} />
                    <Text
                        typographyType={{
                            type: "regular-regular-regular",
                            size: "12px-12px-12px",
                        }}
                        typographyFontColor={"#A0ABB8"}
                    >
                        {`${data?.address}`}
                    </Text>
                </Space>

            </Space>
            <Text
                typographyType={{
                    type: "regular-regular-regular",
                    size: "16px-16px-16px",
                }}
                typographyFontColor={"#66789C"}
            >
                Our Mission to make working life simple
            </Text>
        </Space>
        </div>
        <Divider/>

        <Row>
            <Col lg={18} sm={24} xs={24} style={{paddingRight:"32px"}}>
                <div className={"company-description"} dangerouslySetInnerHTML={data ? {__html: data?.description} : {__html: ""}}
                />
                <Divider/>
                <Title
                    typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "18px-16px-16px",
                    }}>
                    Latest Jobs
                </Title>
                <Row className={`company-jobs-list`}
                     gutter={24}>{latestJobsData?.data?.map((item, index) =>
                    <Col key={index} span={24}>
                        <JobCard viewType={"single"} data={item}/>
                    </Col>
                )}
                </Row>
            </Col>
            <Col lg={6} sm={24} xs={24}>

            </Col>

        </Row>


    </div>
}


export const getServerSideProps: GetServerSideProps<{ data: any, error?: any }> = async ({ query }) => {
    const companyId: any = query?.companyId;

    try {
        const _res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}job_details/get_company_details/${companyId}`)
        const data: any = await _res.json()



        return {
            props: {
                data:data?.data,
            },
        };
    } catch (error) {

        return {
            redirect: {
                permanent: false,
                destination: "/error",
            },
        };
    }
};

export default CompanyDetails