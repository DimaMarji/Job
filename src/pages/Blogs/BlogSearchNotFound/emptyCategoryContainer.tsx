import searchNotFound from "../../../public/Assets/Images/Blogs/search-not-found.svg";
import React from "react";
import {Row, Space} from "antd";
import Image from "next/image"
import { Text } from "../../../Components/Atoms/Typography/Text";

export const noBlogsInCategory = (category: string) => <Row justify={"center"}>
    <Space direction={"vertical"} align={"center"}>
        <Image src={searchNotFound} className={"search-not-found"} alt={"searchNotFound"}

        />
        <Text  typographyType={{size: "20px-20px-20px", type: "regular-regular-regular"}}>
            We are sorry, but there is no blogs related to <span style={{color: "#1F83F4"}}>{category}</span> yet!.
        </Text>
        <br/>

    </Space>
</Row>