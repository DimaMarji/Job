import React from "react";
import "./styles.scss"
import BlogListContainer from "../../Blogs/BlogList";
import {Space} from "antd";
import ArrowIcon from "../../../public/Assets/Icons/Home/black-right-arrow.png";
import {useRouter} from "next/router";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import Image from "next/image"
const OurBlogsSection: React.FC = () => {
    const {push} = useRouter()
    const {isMobileOrTablet} = useAppMediaQuery()

    const viewAllButton = <Space className={"our-blogs-button"} onClick={() =>
        push("Blogs")
    }>
        <Title typographyType={{size: "16px-16px-16px", type: "semi-bold-semi-bold-semi-bold"}}>
            View All
        </Title>
        <Image src={ArrowIcon} alt={"right-arrow"}/>
    </Space>


    return <div className={"our-blogs-container"}>
        <div className={"our-blogs-header"}>
            <div className={"our-blogs-title"}>
                <Title typographyType={{size: "40px-24px-24px", type: "bold-semi-bold-semi-bold"}}
                       className={"card-title"}>
                    News and Blog
                </Title>
                {!isMobileOrTablet && <Text typographyFontColor={"#444754"}
                                            typographyType={{size: "16px-16px-16px", type: "regular-regular-regular"}}>
                    News and Blog
                </Text>}
            </div>
            {!isMobileOrTablet && viewAllButton}
        </div>
        <BlogListContainer numOfItems={3}/>

        {isMobileOrTablet && viewAllButton}
    </div>
}
export default OurBlogsSection