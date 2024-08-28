import React from 'react';
import "./style.scss"
import {IBlogHeaderProps} from "./interface";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Col, Row} from "antd";
import {Text} from "../../../Components/Atoms/Typography/Text";

const BlogHeaderContainer: React.FC<IBlogHeaderProps> = () => {


    const {isMobileOrTablet} = useAppMediaQuery()


    return (
        <div className={"blog-header"}>
            <Row justify={"center"}>
                <Col span={24} className={"blog-header-title"}>
                    <Title className={"animate__ animate__fadeInUp animated"}
                           typographyFontColor={"#05264E"}
                           typographyType={{type: "bold-semi-bold-semi-bold", size: "36px-25px-25px"}} level={1}>
                        News and Blog
                    </Title>
                    <Text className={"animate__ animate__fadeInUp animated"}
                          typographyFontColor={"#66789C"}
                          typographyType={{type: "regular-regular-regular", size: "18px-18px-18px"}} >
                        Get the latest news, updates and tips
                    </Text>
                </Col>
            </Row>
        </div>
    );
};
export default BlogHeaderContainer;