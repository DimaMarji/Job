import React from "react";
import "./styles.scss"
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import Image from "next/image";
import {Input, Select, Space} from "antd";

import SearchIcon from "../../../public/Assets/Images/page/homepage1/search-icon.svg"
import SearchMenuIcon from "../../../public/Assets/Icons/Home/search-menu.svg"
const {Search} =Input

const JobsHeroSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const handleSearch=(value:string)=>{

    }

    const fakeOptions=[{label:"damascus",value:"da,m,ascus"},
        {label:"damascus",value:"da,m,ascus"},
        {label:"damascus",value:"da,m,ascus"},
        {label:"damascus",value:"da,m,ascus"},
        {label:"damascus",value:"da,m,ascus"},]

    return <div className={"job-list-hero-section"}>
        <Title
            className={"animate__ animate__fadeInUp animated"}
            typographyFontColor={"#05264E"}
            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-18px-18px"}} level={1}>
            <span
                className="color-brand-2">22 Jobs</span> Available Now
        </Title>
        <Text
            className={"animate__ animate__fadeInUp animated"}
            typographyFontColor={"#66789C"}
            typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,{`\n`}
            Lorem ipsum dolor
        </Text>
        <div className={"jobs-search-container"}>
            <Select options={fakeOptions}/>
            <Select options={fakeOptions}/>
        <Search prefix={<Image width={14} alt="search" src={SearchMenuIcon}/>}
                onSearch={handleSearch}
                placeholder="Job ID... "
                enterButton={<Space><Image style={{display:"block"}} width={14} src={SearchIcon} alt={"search-icon"}/>
                    <span>Search</span></Space>}/>
        </div>

    </div>
}

export default JobsHeroSection