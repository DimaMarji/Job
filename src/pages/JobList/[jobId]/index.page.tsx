import "./styles.scss";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { replaceDashesWithSpaces } from "../../../Helpers/String/helpers";
import { isEmpty } from "lodash";
import Image from "next/image";
import JobHeaderImage from "../../../public/Assets/Images/page/job-single/thumb.png"
import CompanyIcon from "../../../public/Assets/Images/template/icons/briefcase.svg"
import { Title } from "../../../Components/Atoms/Typography/Title";
import { Text } from "../../../Components/Atoms/Typography/Text";
import { Col, Divider, Row, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import { Button } from "../../../Components/Atoms/Button";

import { FacebookShareButton, LinkedinShareButton,WhatsappShareButton} from "react-share";
import { useRouter } from "next/router";
import { webSiteURL } from "../../../Layouts/SharedLayout/SEO/webSiteMetas";
import FacebookIcon from "../../../public/Assets/Images/template/icons/share-fb.svg";

import WhatsAppIcon from "../../../public/Assets/Images/template/icons/share-whatsapp.svg";


const JobDetails = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const {asPath} = useRouter()

    const shareLink = webSiteURL + asPath
    const shareJobContainer = <Space>
        <Text>
        Share this
        </Text>
    <FacebookShareButton
        url={shareLink}
        className="share-link-button hover-up"
    >
     
     <Image alt="FacebookIcon" src={FacebookIcon}/>
    </FacebookShareButton>
    <WhatsappShareButton
            url={shareLink}
            className="share-link-button hover-up"    >
     <Image alt="WhatsAppIcon" src={WhatsAppIcon}/>
    </WhatsappShareButton>
</Space>

    
    return <div className={"job-details"}>
        <Image className="job-details-header" alt="job details" src={JobHeaderImage}/>
        <Title   typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "26px-20px-20px",
                }}>
            {data?.title}
        </Title>
        <Space>
        <Space align={"center"}>
          <Image alt="company" src={CompanyIcon}/>
     
            <Text
              typographyType={{
                type: "regular-regular-regular",
                size: "12px-12px-12px",
              }}
              typographyFontColor={"#A0ABB8"}
            >
              {data?.hide_company_name ?"Confidential":data?.company_name}
            </Text>
          </Space>
          <Space>
            <CalendarOutlined style={{ color: "#A0ABB8" }} />

            <Text
              typographyType={{
                type: "regular-regular-regular",
                size: "12px-12px-12px",
              }}
              typographyFontColor={"#A0ABB8"}
            >
              {moment(data?.created_at).format("DD MMM YYYY")}
            </Text>
          </Space>
        
        </Space>
        <Divider/>

        <Row>
            <Col lg={18}>
            <Title typographyFontColor="#4F5E64"
        className="job-details-title"
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
            Responsibilities
        </Title>

        <div dangerouslySetInnerHTML={data ? {__html: data?.responsibilities} : {__html: ""}}
                />

<Title typographyFontColor="#4F5E64"
className="job-details-title"
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
            Qualifications
        </Title>

        <div dangerouslySetInnerHTML={data ? {__html: data?.qualifications} : {__html: ""}}
                />
                <Title typographyFontColor="#4F5E64"
                className="job-details-title"
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
            Specific Vacancy Requirements
        </Title>

        <div dangerouslySetInnerHTML={data ? {__html: data?.additional_req} : {__html: ""}}
                />

<Title typographyFontColor="#4F5E64"
                className="job-details-title"
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
            Salary and Benefits
        </Title>
        <div dangerouslySetInnerHTML={data ? {__html: data?.benefits} : {__html: ""}}
                />

<Title typographyFontColor="#4F5E64"
                className="job-details-title"
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
            Documents
        </Title>
        <Space>
            <Button type="secondary">
            Requirements File
            </Button>
            <Button type="secondary">
            Details File
                </Button>
             
        </Space>
        <Divider/>
        <div>
        <Space>
        <Button>
            Apply now
            </Button>
            <Button type="secondary">
            Save job
            </Button>
            <Button type="secondary">
            Print job
                </Button>
             
        </Space>
        {shareJobContainer}
        </div>
            </Col>
            <Col lg={6}>
            </Col>
        </Row>

       


    </div>;
};

export const getServerSideProps: GetServerSideProps<{ data: any, error?: any }> = async ({ query }) => {
    const jobId: any = query?.jobId;

    try {
        const _res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}job_details/get_job_by_id/${jobId}`)
        const data: any = await _res.json()

      

        return {
            props: {
                data:data?.data,
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
