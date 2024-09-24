import {Checkbox, Divider, Select, Tag} from "antd";
import React, { useState } from "react";
import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import "./styles.scss";
import {useDataFetching} from "../../ReactQuery/ApiCrud/useDataFetching";
import {ServicesNames} from "../../Constants/servicesNames";
import {dataToOptions} from "../../pages/CompaniesList/helper";
import FilterBy from "../FilterBy/filterByContainer";
import useUrl from "../../Hooks/window/Url";

const FilterColumn = ({ }) => {

    const [filters, setFilters] = useState({
        industry: [],
        education: [],
        job_type:[]
    });

    const {updateParams}=useUrl()

    const {data: industryData} = useDataFetching(
        ServicesNames.AllIndustry,
    );

    const {data: educationLevelData} = useDataFetching(
        ServicesNames.EducationLevel,
    );

    const {data: jobTypesData} = useDataFetching(
        ServicesNames.JobTypes,
    );

    const {data: locationsData} = useDataFetching(
        ServicesNames.HomeByCity,
    );

    const handleChange = (key:string,selectedValues) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: selectedValues,
        }));

        updateParams([{ [key]: selectedValues}],[key])
    };

  return (
      <div style={{padding: "20px", maxWidth: "300px"}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
              <Title
                  typographyFontColor={"#05264E"}
                  typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "14px-14px-14px"}} level={5}>
                  Advanced Filter
              </Title>
              <Text
                  typographyFontColor={"#66789C"}
                  typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                  Reset
              </Text>

          </div>
          <Divider className={"filter-divider"}/>

          <Select placeholder={"Location"}
                  className={"sider-location-select"} options={dataToOptions(locationsData)}/>
          <FilterBy
              label="Industry"
              options={dataToOptions(industryData?.data)}
              onChange={(values)=>{
                  handleChange("industry",values)
              }}
          />

          <FilterBy
              label="Minimum Education Level"
              options={dataToOptions(educationLevelData?.data)}
              onChange={(values)=>{
                  handleChange("education",values)
              }}
          />
          <FilterBy
              label="Job type"
              options={dataToOptions(jobTypesData?.data)}
              onChange={(values)=>{
                  handleChange("job_type",values)
              }}
          />

          <div style={{marginTop: "20px"}}>
              <h3>Selected Filters:</h3>
              <pre>{JSON.stringify(filters, null, 2)}</pre>
          </div>
      </div>
  );
};

export default FilterColumn;
