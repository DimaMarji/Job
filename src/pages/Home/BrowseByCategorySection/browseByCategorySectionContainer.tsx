import React, {useState} from "react";
import "./styles.scss"
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {Col, List, Row} from "antd";
import Link from "next/link";
import {ServicesNames} from "../../../Constants/servicesNames";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";

const BrowseByCategorySection: React.FC = () => {
    const {isMobile, isTablet} = useAppMediaQuery()

    const {data, error, isLoading, isError} = useDataFetching(
        ServicesNames.HomeCategory,
    );

    const CategoriesData:any = data?.data



    const groupCategories = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr?.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const numColumns = isMobile ? 1 : isTablet ? 2 : 4;
    const categoriesColumns = groupCategories(CategoriesData, Math.ceil(CategoriesData?.length / numColumns));


    return <div className={"category-container"}>
        <div className={"category-title-container"}>
            <Title
                className={"jobs-of-day-title animate__ animate__fadeInUp animated"}
                typographyFontColor={"#05264E"}
                typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
                Browse By Category
            </Title>

            <Text
                className={"animate__ animate__fadeInUp animated"}
                typographyFontColor={"#66789C"}
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </Text>
        </div>

        <Row>
            {categoriesColumns.map((categoryChunk, index) => (
                <Col span={24 / numColumns} key={index}>
                    <List className={"category-column-list"} split={false} dataSource={categoryChunk} renderItem={(category: any, index) => (
                        <List.Item>
                            <Link key={index} href={""}>
                                <Text  typographyFontColor={"#05264E"}
                                       typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                                {category?.name}
                                </Text>
                            </Link>
                        </List.Item>
                    )}/>
                </Col>
            ))}
        </Row>


    </div>

}

export default BrowseByCategorySection