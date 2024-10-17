import React from "react";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Card, List} from "antd";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../../Constants/servicesNames";

const BestPlaceToWorkSection: React.FC = () => {

    const {data, error, isLoading, isError} = useDataFetching(
        ServicesNames.HomeBestPlaces,
    );

    const bestPlacesData: any = data?.data


    return <div>
        <Title
            className={"best-place-title animate__ animate__fadeInUp animated"}
            typographyFontColor={"#05264E"}
            typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
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
        }} dataSource={bestPlacesData} renderItem={(item: any, index) =>
            <List.Item key={index}><Card className={"work-best-card hover-up"} title={<Title
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "16px-14px-14px"}}>{item?.name}</Title>}>
                <List grid={{
                    column: 1
                }} dataSource={item?.activities} renderItem={(item: any, index) =>
                    <List.Item key={index}>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}
                            typographyFontColor={"#4F5E64"}>
                            {item?.name}
                        </Text></List.Item>}/>
            </Card></List.Item>}/>
    </div>
}

export default BestPlaceToWorkSection