import React, {useEffect, useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {Card, Col, Divider, List, Row, Space} from "antd";
import {ServicesNames} from "../../Constants/servicesNames";
import {Title} from "../../Components/Atoms/Typography/Title";

import {Text} from "../../Components/Atoms/Typography/Text";
import AlphabetFilter from "../../SharedComponent/AlphabetFilter/alphabetFilterContainer";
import {useRouter} from "next/router";
import FilterColumn from "../../SharedComponent/FilterColumn/filterColumnContainer";
import {Button} from "../../Components/Atoms/Button";
import Image from "next/image";
import LocationIcon from "../../public/Assets/Images/template/icons/location.svg"

const CompaniesList: React.FC = () => {

    const [companyListData, setCompanyListData] = useState<any>()
    const {query, push} = useRouter()
    const selectedLetter = query?.selectedLetter

    const {data, error, isLoading, isError, isSuccess} = useDataFetching(
        ServicesNames.AllCompanies,
    );

    const [filters, setFilters] = useState({
        industry: [],
        education: [],
        job_type: []
    });


    useEffect(() => {
        setCompanyListData(data?.data)
    }, [isSuccess])


    const filteredData = (data) => data?.filter((item) =>
        selectedLetter ? item.name.startsWith(selectedLetter) : true
    );



    return <div className={"company-list-container"}>
        <div className={"company-list-header"}>
            <Title
                className={"title"}
                typographyFontColor="#05264E"
                typographyType={{
                    size: "26px-20px-20px",
                    type: "semi-bold-semi-bold-semi-bold",
                }}
                level={1}
            >
                Browse Companies
            </Title>
            <Text

                typographyFontColor="#05264E"
                typographyType={{
                    size: "14px-14px-14px",
                    type: "regular-regular-regular",
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?
            </Text>
            <AlphabetFilter onFilter={(letter: string) => {
                push(`?selectedLetter=${letter}`)

            }}/>
        </div>
        <Row>
            <Col lg={8}>

                <FilterColumn filters={filters} setFilters={setFilters}/>

            </Col>
            <Col lg={16}>
                <div style={{textAlign:"left",paddingTop:"12px"}}>
                <Text typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}
                      typographyFontColor={"#4F5E64"}>
                    Showing <b>41-60</b> of <b>944 </b> jobs
                </Text>
                <Divider/>
                </div>
                <List
                    className={`comapny-list`}
                    grid={{
                        gutter: 24,
                        xxl: 3,
                        xl: 3,
                        lg: 3,
                        sm: 1,
                        xs: 1,
                    }}
                    dataSource={companyListData}

                    renderItem={(item:any, index) => (
                        <List.Item key={index}>
                            <Card onClick={()=>push(`/company-details/${item?.id}`)}
                             className={"company-card-jobs hover-up animate__ animate__fadeIn"}>
                                <div className={"card-content"}>
                                <Image width={52} height={52} src={item?.logo} alt={item?.company_name}/>
                                <Title
                                    className={"company-name"}
                                    typographyFontColor="#05264E"
                                    typographyType={{
                                        size: "18px-16px-16px",
                                        type: "semi-bold-semi-bold-semi-bold",
                                    }}
                                    level={5}
                                >
                                    {item?.company_name}
                                </Title>
                                <Space>
                                    <Image width={12} src={LocationIcon} alt={item?.name}/>
                                <Text

                                    typographyType={{
                                        size: "12px-12px-12px",
                                        type: "regular-regular-regular",
                                    }}
                                >
                                   {item?.address}
                                </Text>
                                </Space>

                                <div className={"company-jobs-button"}>
                                    {`${item?.vacancies_count} Jobs Open`}
                                </div>
                                </div>
                            </Card>

                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </div>
}

export default CompaniesList