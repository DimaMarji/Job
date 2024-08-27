import React from "react";
import {Title} from "../../../Components/Atoms/Typography/Title";
import "./styles.scss"
import {Card, List} from "antd";
import {Text} from "../../../Components/Atoms/Typography/Text";

const BestPlaceToWorkSection: React.FC = () => {
    return <div>
        <Title
            className={"best-place-title animate__ animate__fadeInUp animated"}
            typographyFontColor={"#05264E"}
            typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={1}>
            Best Place To Work
        </Title>
        <Text
            className={"animate__ animate__fadeInUp animated"}
            typographyFontColor={"#66789C"}
            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
            Find your favourite jobs and get the benefits of yourself
        </Text>
        <List className={"best-place-title-list"} grid={{
            gutter: 24,
            xxl: 3,
            xl: 3,
            lg: 2,
            md: 1,
            sm: 1,
            xs: 1
        }} dataSource={[1, 2, 3, 4]} renderItem={(item, index) =>
            <List.Item key={index}><Card className={"work-best-card"} title={<Title
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "16px-14px-14px"}}>Products</Title>}>
                <List grid={{
                    column: 1
                }} dataSource={[1, 2, 3, 4]} renderItem={(item, index) =>
                    <List.Item key={index}>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}
                            typographyFontColor={"#4F5E64"}>
                            example
                        </Text></List.Item>}/>
            </Card></List.Item>}/>
    </div>
}

export default BestPlaceToWorkSection