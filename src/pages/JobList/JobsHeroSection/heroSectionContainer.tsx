import React, {useState} from "react";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import Image from "next/image";
import {Input, Select, Space} from "antd";

import SearchIcon from "../../../public/Assets/Images/page/homepage1/search-icon.svg"
import SearchMenuIcon from "../../../public/Assets/Icons/Home/search-menu.svg"
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../../Constants/servicesNames";
import {dataToOptions} from "../helper";
const {Search} =Input

const JobsHeroSection: React.FC<{ onSearch: (searchValue:any) => void }> = ({onSearch}) => {
    const {isMobileOrTablet} = useAppMediaQuery()
    const [selectedSearchData, setSelectedSearchData] = useState<any>({
        job_activity_id: undefined,
        location_id:undefined
    });

    const {data: industryData} = useDataFetching(
        ServicesNames.AllIndustry,
    );

    const {data: locationsData} = useDataFetching(
        ServicesNames.HomeByCity,
    );

    const handleSearch=(value:string)=>{
        onSearch({title:value, ...selectedSearchData})
    }


    return <div className={"job-list-hero-section"}>
        <Title
            className={"animate__ animate__fadeInUp animated"}
            typographyFontColor={"#05264E"}
            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-26px-26px"}} level={1}>
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
            <Select placeholder={"Industry"}
                    onSelect={(value)=>setSelectedSearchData({...selectedSearchData,job_activity_id:value})}
                    className={"industry-select"} options={dataToOptions(industryData?.data)}/>
            <Select placeholder={"Location"}
                    onSelect={(value:string)=>setSelectedSearchData({...selectedSearchData,location_id:value})}
                    className={"location-select"} options={dataToOptions(locationsData)}/>
        <Search prefix={<Image width={14} alt="search" src={SearchMenuIcon}/>}
                onSearch={handleSearch}
                className={"search-input"}
                placeholder="Your keyword... "
                enterButton={<Space><Image style={{display:"block"}} width={14} src={SearchIcon} alt={"search-icon"}/>
                    <span>Search</span></Space>}/>
        </div>

    </div>
}

export default JobsHeroSection