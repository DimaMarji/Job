import React from 'react';
import "./style.scss"
import {IBlogHeaderProps} from "./interface";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Col, Row} from "antd";
import {Text} from "../../../Components/Atoms/Typography/Text";
import PageHeaderSection from "../../../SharedComponent/PageHeaderSection/pageHeaderSection";
import BlogHeaderImage from "../../../public/Assets/Images/page/blog/bg-breadcrumb.png"

const BlogHeaderContainer: React.FC<IBlogHeaderProps> = () => {


    const {isMobileOrTablet} = useAppMediaQuery()


    return (
        <div className={"blog-header"}>
            <PageHeaderSection key={"Blogs"} image={BlogHeaderImage?.src} title={"Blogs"} subTitle={"Get the latest news, updates and tips"}/>

            <Row justify={"center"}>
                <Col span={24} className={"blog-header-title"}>
                    <Title className={"animate__ animate__fadeInUp animated latest-title"}
                           typographyFontColor={"#05264E"}
                           typographyType={{type: "bold-semi-bold-semi-bold", size: "32px-24px-24px"}} level={1}>
                        Latest Posts
                    </Title>
                    <Text className={"animate__ animate__fadeInUp animated"}
                          typographyFontColor={"#66789C"}
                          typographyType={{type: "regular-regular-regular", size: "18px-18px-18px"}} >
                        Don't miss the trending news
                    </Text>
                </Col>
            </Row>
        </div>
    );
};
export default BlogHeaderContainer;