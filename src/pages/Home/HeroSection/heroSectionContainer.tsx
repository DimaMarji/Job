import React, {useState} from "react";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Col, Input, Row, Space} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import Image from "next/image";
import HeroSectionImage from "../../../public/Assets/Images/page/homepage1/banner1.png"
import SearchIcon from "../../../public/Assets/Images/page/homepage1/search-icon.svg"
import SearchMenuIcon from "../../../public/Assets/Icons/Home/search-menu.svg"
import {Button} from "../../../Components/Atoms/Button";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";


const {Search} = Input
const HeroSection: React.FC = () => {


    const {isMobileOrTablet} = useAppMediaQuery()

    const [jobId, setJobId] = useState<string | number>()
    const [search, setSearch] = useState<boolean>(false)

    const {data, error, isLoading, isError} = useDataFetching(
        `home_page/vacancy/${jobId}`,
        {}, {enabled:search}
    );

    const handleSearch = (value: string) => {
        setJobId(value)
        setSearch(true)
    }


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

                        <>
                            <Search prefix={<Image width={14} alt="search" src={SearchMenuIcon}/>}
                                    onSearch={handleSearch}
                                    placeholder="Job ID... "
                                    enterButton={<Space><Image style={{display: "block"}} width={14} src={SearchIcon}
                                                               alt={"search-icon"}/>
                                        <span>Search</span></Space>}/>

                        </>
                    </div>
                </Col>
                {!isMobileOrTablet && <Col lg={12} sm={24} xs={24}>
                    <Image className={"hero-section-header-image"} src={HeroSectionImage} alt={"hero-section"}/>
                </Col>}


                <div className="box-we-hiring">
                    <div className="text-1"><span className="text-we-are">We are</span><span
                        className="text-hiring">Hiring</span></div>
                    <div className="text-2">Let&rsquo;s <span className="color-brand-1">Work</span> Together<br/> &amp;
                        <span className="color-brand-1">Explore</span> Opportunities
                    </div>
                    <div className="text-3">
                        <Button className="btn-apply-icon" type={"primary"}>
                            Apply{`\n`}now</Button>

                    </div>
                </div>

            </Row>
        </div>


    </div>
}

export default HeroSection