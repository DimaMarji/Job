import React from "react";
import { Card, Tag, Button, Row, Col, Space, Divider } from "antd";
import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import "./styles.scss";
import Image from "next/image";
import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import LogoImage from "../../public/Assets/Images/template/bg-newsletter.svg";
import LocationIcon from "../../public/Assets/Images/template/icons/location.svg";
import moment from "moment";

interface JobCardProps {
  data: any;
  viewType?: "single" | "grid";
}

const JobCard: React.FC<JobCardProps> = ({ data, viewType }) => {
  const jobInfoData = [
    { label: " Job Id:", value: data?.id },
    { label: "Job Type:", value: data?.job_type },
    { label: "Education Level:", value: data?.educational_level },
  ];

  const FieldsOfWorkElement = (
    <div className={"tags-container"}>
      {data?.job_activities?.map((tag) => {
        return <Tag>{tag?.name}</Tag>;
      })}
    </div>
  );

  return (
    <Card
      className={`job-card hover-up ${viewType}`}
      title={
        <div className={"job-card-footer"}>
          <Space className="company-info-space">
            <Image
              alt={"company-logo"}
              width={52}
              height={52}
              className={"company-logo-image"}
              src={data?.logo}
            />
            <Space direction={"vertical"} align={"start"}>
              <Title
                className={"name-job"}
                typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "14px-14px-14px",
                }}
              >
                {data?.company_name}
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
                  {`${data?.city}, ${data?.country}`}
                </Text>
              </Space>
            </Space>
          </Space>
          {viewType == "single" && FieldsOfWorkElement}
        </div>
      }
    >
      <Title
        typographyType={{
          type: "semi-bold-semi-bold-semi-bold",
          size: "18px-18px-18px",
        }}
      >
        {data?.title}
      </Title>
      {viewType == "grid" && <Divider />}
      <div className={"job-info"}>
        {jobInfoData?.map((item) => {
          return (
            <div>
              <Text
                style={{ marginRight: "10px" }}
                typographyType={{
                  type: "bold-bold-bold",
                  size: "12px-12px-12px",
                }}
                typographyFontColor={"#A0ABB8"}
              >
                {item?.label}
              </Text>
              <Text
                typographyType={{
                  type: "bold-bold-bold",
                  size: "12px-12px-12px",
                }}
                typographyFontColor={"#4F5E64"}
              >
                {item?.value}
              </Text>
            </div>
          );
        })}
      </div>
      {viewType == "grid" && (
        <div style={{display:"ruby-text"}}>
          <Text
            style={{ marginRight: "10px" }}
            typographyType={{
              type: "bold-bold-bold",
              size: "12px-12px-12px",
            }}
            typographyFontColor={"#A0ABB8"}
          >
            Fields Of Work:
          </Text>{" "}
          <>{FieldsOfWorkElement}</>
        </div>
      )}
      {viewType == "single" && <Divider />}
      <div className={"job-card-footer"}>
        <Space>
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
          <Space align={"center"}>
            <CalendarOutlined style={{ color: "#A0ABB8" }} />
            <Text
              typographyType={{
                type: "regular-regular-regular",
                size: "12px-12px-12px",
              }}
              typographyFontColor={"#A0ABB8"}
            >
              Damascus
            </Text>
          </Space>
        </Space>

        {viewType == "grid" && <Divider />}

        <Button type={"primary"} className="btn-apply-now">
          Apply now
        </Button>
      </div>
    </Card>
  );
};

export default JobCard;
