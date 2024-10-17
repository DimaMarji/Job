import React from "react";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import HorizontalScrollList from "../../../Components/Molecules/HorizontalScrollList/horizontalScrollListContainer";
import {Card} from "antd";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../../Constants/servicesNames";
import Image from "next/image";

const TopCompaniesSection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const {data, error, isLoading, isError} = useDataFetching(
        ServicesNames.HomeTopCompany,
    );

    const TopCompaniesData:any = data?.data ?? []
    
    let companyData=[...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,
        ...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,
        ...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,
        ...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData,...TopCompaniesData
    ]

    return <div className="top-companies">

        <HorizontalScrollList data={companyData}
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
                              listContainer={companyData?.map(
                                  (item, index) => {
                                      return <Card className={"companies-item-logo hover-up animate__ animate__fadeIn animated"} key={index}>
                                          <Image width={90} height={90} src={item?.logo} alt={item?.name}/>
                                      </Card>
                                  }
                              )}/>

    </div>
}

export default TopCompaniesSection