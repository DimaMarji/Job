import React from "react";
import "./styles.scss"
import BlogListContainer from "../../Blogs/BlogList";
import {Button, Space} from "antd";
import LoadIcon from "../../../public/Assets/Images/template/icons/icon-load.svg";
import {useRouter} from "next/router";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import Image from "next/image"
const OurBlogsSection: React.FC = () => {
    const {push} = useRouter()
    const {isMobileOrTablet} = useAppMediaQuery()

    const viewAllButton = <Button className={"our-blogs-button"} onClick={() =>
        push("Blogs")
    }>
        <Image width={18} src={LoadIcon} alt={"right-arrow"}/>
            Load More Blogs

    </Button>


    return <div className={"our-blogs-container"}>
        <div className={"our-blogs-header"}>
            <div className={"our-blogs-title"}>
                <Title typographyType={{size: "40px-24px-24px", type: "bold-semi-bold-semi-bold"}}
                       className={"card-title"}>
                    News and Blog
                </Title>
                {!isMobileOrTablet && <Text typographyFontColor={"#444754"}
                                            typographyType={{size: "16px-16px-16px", type: "regular-regular-regular"}}>
                   Get the latest news, updates and tips
                </Text>}
            </div>
            {/*{!isMobileOrTablet && viewAllButton}*/}
        </div>
        <BlogListContainer numOfItems={3}/>

        {viewAllButton}
    </div>
}
export default OurBlogsSection