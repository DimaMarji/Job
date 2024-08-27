import React from "react";
import "./styles.scss"
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import HorizontalScrollList from "../../../Components/Molecules/HorizontalScrollList/horizontalScrollListContainer";
import {Card} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";

const TopCompaniesSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const TopCompaniesData = [1, 2, 3, 4, 5, 43634, 634, 463, 34634, 1, 2, 3, 4, 5, 43634, 634, 463, 34634,1, 2, 3, 4, 5, 43634, 634, 463, 34634, 1, 2, 3, 4, 5, 43634, 634, 463, 34634, 6]
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