import React, {useEffect, useState} from "react";
import "./styles.scss"
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {Card, Col, Divider, List, Row, Select} from "antd";
import FilterBy from "../../SharedComponent/FilterBy/filterByContainer";
import {ServicesNames} from "../../Constants/servicesNames";
import {dataToOptions} from "./helper";
import {Title} from "../../Components/Atoms/Typography/Title";
import {Text} from "../../Components/Atoms/Typography/Text";
import AlphabetFilter from "../../SharedComponent/AlphabetFilter/alphabetFilterContainer";
import {useRouter} from "next/router";
import FilterColumn from "../../SharedComponent/FilterColumn/filterColumnContainer";

const CompaniesList: React.FC = () => {

    const [companyListData, setCompanyListData] = useState<any>()
    const {query,push}=useRouter()
    const selectedLetter=query?.selectedLetter

    const {data, error, isLoading, isError, isSuccess} = useDataFetching(
        ServicesNames.AllVacancies,
    );




    useEffect(() => {
        setCompanyListData(data?.data)
    }, [isSuccess])


    const filteredData = (data)=>data?.filter((item) =>
        selectedLetter ? item.name.startsWith(selectedLetter) : true
    );


    return <div className={"company-list-container"}>

        <AlphabetFilter onFilter={(letter: string) => {
            push(`?selectedLetter=${letter}`)
            console.log(letter)
        }}/>
        <Row>
            <Col lg={8}>

                <FilterColumn/>

            </Col>
            <Col lg={16}>
                <List
                    className={``}
                    grid={{
                        gutter: 24,
                        xxl: 3,
                        xl: 3,
                        lg: 3,
                        sm: 1,
                        xs: 1,
                    }}
                    dataSource={data?.data}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <Card/>

                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </div>
}

export default CompaniesList