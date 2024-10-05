import { Divider, Space } from "antd"
import Image from "next/image"
import { Title } from "../../../../Components/Atoms/Typography/Title"
import { Text } from "../../../../Components/Atoms/Typography/Text"
import "./styles.scss"

import LocationIcon from "../../../../public/Assets/Images/template/icons/location.svg";

const CompanyProfile:React.FC<{data:any}>=({data})=>{
    return<div className="company-profile">
        <Space align="start">
        <Image className="comaony-logo" src={data?.logo} alt="logo"/>
        <Space direction="vertical">
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
                  {`${data?.city}, ${data?.country}`}
                </Text>
              </Space>
              <Text
                  typographyType={{
                    type: "regular-regular-regular",
                    size: "12px-12px-12px",
                  }}
                  typographyFontColor={"#05264E"}
                  style={{textDecoration:"underline"}}
                >
                  {`${data?.vacancies_count ?? 0} Open Jobs`}
                </Text>
        </Space>
        </Space>
        <Divider/>
        <Text typographyFontColor="#4F5E64" 
        typographyType={{type:"regular-regular-regular",size:"14px-14px-14px"}}>
            {data?.company_description}</Text>
       

    </div>
}

export default CompanyProfile