import "./style.scss"
import React from "react";
import {AboutUsSectionData} from "./constant";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {Col, Row, Space} from "antd";
import Image from "next/Image"
import {PhoneOutlined} from '@ant-design/icons';


const AboutUsSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()


    return <>{AboutUsSectionData?.map((item, index) => {
        return <div key={index} className={`about-us-header-container`}>
            <Row className={"about-us-header"}>
                <Col lg={12} sm={24} xs={24}>
                    <div className={"about-us-text"}>
                        <Title className={"about-us-title"}
                               typographyType={{type: "regular-regular-regular", size: "30px-20px-20px"}}

                               typographyFontColor={"#F89B35"} level={1}>
                            {item?.firstTitleSection}
                        </Title>
                        <Title className={"about-us-subtitle"}
                               typographyFontColor={"#303A42"}
                               typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-18px-18px"}}
                               level={2}>
                            {item?.secondTitleSection}
                        </Title>
                        {!isMobileOrTablet && <><Text
                            typographyFontColor={"#303A42"}
                            className={"about-us-description"}
                            typographyType={{type: "regular-regular-regular", size: "16px-14px-14px"}}>
                            {item?.description}
                        </Text>
                            <Space>
                                <PhoneOutlined/>
                                <Text
                                    typographyFontColor={"#303A42"}
                                    typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-18px-18px"}}>
                                    {item?.phone}
                                </Text>
                            </Space>
                        </>}
                    </div>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <Image className={"about-us-header-image"} src={item.image} alt={"about-us"}/>
                </Col>
                {isMobileOrTablet && <Col lg={12} sm={24} xs={24}>
                    <Text
                        typographyFontColor={"#757575"}
                        className={"about-us-description"}
                        typographyType={{type: "regular-regular-regular", size: "16px-14px-14px"}}>
                        {item?.description}
                    </Text>
                    <Space>
                        <PhoneOutlined/>
                        <Text
                            typographyFontColor={"#303A42"}
                            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-18px-18px"}}>
                            {item?.phone}
                        </Text>
                    </Space>
                </Col>}

            </Row>
        </div>
    })}
    </>
}

export default AboutUsSection;
