import React from "react";
import "./styles.scss"
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import HorizontalScrollList from "../../../Components/Molecules/HorizontalScrollList/horizontalScrollListContainer";
import {Card} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";

const TopCompaniesSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const {data, error, isLoading, isError} = useDataFetching(
        "home_page/best_place",          // Key and params combined as query key
    );

    const TopCompaniesData = data?.data
    return <div>

        <HorizontalScrollList data={TopCompaniesData}
                              title={<div className={"companies-title-container"}>
                                  <Title
                                      className={"best-place-title animate__ animate__fadeInUp animated"}
                                      typographyFontColor={"#05264E"}
                                      typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
                                      Top Companies
                                  </Title>

                                  <Text
                                      className={"animate__ animate__fadeInUp animated"}
                                      typographyFontColor={"#66789C"}
                                      typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
                                      Discover your next career move, freelance gig, or internship
                                  </Text>
                              </div>}
                              listContainer={TopCompaniesData?.map(
                                  (item, index) => {
                                      return <Card className={"companies-item-logo animate__ animate__fadeIn animated"} key={index}>
                                          MTN
                                      </Card>
                                  }
                              )}/>

    </div>
}

export default TopCompaniesSection