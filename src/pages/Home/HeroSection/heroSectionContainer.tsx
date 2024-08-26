import React from "react";
import "./styles.scss"
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Col, Input, Row} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Text} from "../../../Components/Atoms/Typography/Text";
import Image from "next/image";
import HeroSectionImage from "../../../public/Assets/Images/page/homepage1/banner1.png"
import SearchIcon from "../../../public/Assets/Images/page/homepage1/search-icon.svg"


const {Search} =Input
const HeroSection: React.FC = () => {


    const {isMobileOrTablet} = useAppMediaQuery()


    return <div className={"hero-section-container"}>


        <div className={`hero-section-header-container`}>
            <Row className={"hero-section-header"}>
                <Col lg={12} sm={24} xs={24}>
                    <div className={"hero-section-text"}>
                        <Title
                            className={"heading-banner wow animate__ animate__fadeInUp animated"}
                            typographyFontColor={"#05264E"}
                            typographyType={{type: "bold-bold-bold", size: "48px-52px-38px"}} level={1}>
                            The <span
                            className="color-brand-2">Easiest Way</span><br/>to Get
                            Your New Job
                        </Title>

                        {!isMobileOrTablet && <>
                            <Search enterButton={<><Image width={16} src={SearchIcon} alt={"search-icon"}/>Search</>}/>
                        </>}
                    </div>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <Image className={"hero-section-header-image"} src={HeroSectionImage} alt={"hero-section"}/>
                </Col>
                {isMobileOrTablet && <Col lg={12} sm={24} xs={24}>
                    <Text
                        typographyFontColor={"#757575"}
                        className={"hero-section-description"}
                        typographyType={{type: "regular-regular-regular", size: "16px-14px-14px"}}>
                        description
                    </Text>
                </Col>}

            </Row>
        </div>


    </div>
}

export default HeroSection