import "./styles.scss"
import {IPageHeaderSection} from "./interface";
import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {Title} from "../../Components/Atoms/Typography/Title";
import {Text} from "../../Components/Atoms/Typography/Text";
import React from "react";
import ArrowIcon from "../../public/Assets/Images/template/icons/arrow-breadcrumb.svg"
import Image from "next/image"

const PageHeaderSection: React.FC<IPageHeaderSection> = ({
                                                             image,
                                                             title,
                                                             subTitle
                                                         }) => {

    return <div style={{background: `url(${image}) `}}
                className={"page-header-section"}>
        <div className={"page-header-title"}>
            <Title className={"animate__ animate__fadeInUp animated title"}
                   typographyFontColor={"#05264E"}
                   typographyType={{type: "bold-semi-bold-semi-bold", size: "32px-24px-24px"}}>{title}</Title>
            {subTitle && <Text
                typographyFontColor={"#66789C"}
                typographyType={{type: "regular-regular-regular", size: "18px-18px-18px"}}> {subTitle}
            </Text>}</div>
        <Breadcrumb separator={<Image src={ArrowIcon} alt={"ArrowIcon"}/>}>
            <Breadcrumb.Item href={"/"}>
                <HomeOutlined/> Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/${title}`}>
                {title}
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}

export default PageHeaderSection