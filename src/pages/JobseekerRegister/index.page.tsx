import React, { useState } from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Select, Tooltip } from 'antd';

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import { InfoCircleOutlined } from '@ant-design/icons';
import { FormCardSection } from '../EmployerRegister/index.page';
import { jobseekerAccountInfo, targetedJob } from './constant';
import { useDataFetching } from '../../ReactQuery/ApiCrud/useDataFetching';
import { ServicesNames } from '../../Constants/servicesNames';
import PhoneInput from 'react-phone-input-2';
import { FormField } from '../EmployerRegister/interface';
import { dataToOptions } from '../EmployerRegister/helper';
import Image from 'next/image';
import FormVector from "../../public/Assets/Images/page/login-register/img-2.svg"
import Link from 'next/link';



const EmployerRegister: React.FC = () => {
    const [form] = Form.useForm();
    const [countryId, setCountryId] = useState<number | string>();

    const getAllCountry = useDataFetching(ServicesNames.AllCountries);
    const getAllCity = useDataFetching(`${ServicesNames.AllCities}${countryId}`);
    const getAllTitles = useDataFetching(ServicesNames.AllTitles);
    
  
    console.log("process.env.NEXT_PUBLIC_BASE_API_URL",process.env.NEXT_PUBLIC_BASE_API_URL);
  
    const handleSubmit = (values: any) => {
      console.log("Form values:", values);
    };
  
    const onSelect = (selected: string, name: string) => {
      if (name == "country") {
        setCountryId(selected)
      }
    };
  
    const renderFormItems = (fields: FormField[], cols: number) =>
      fields.map((field) => {
        const selectData=field?.name=="country"?getAllCountry?.data?.data :field?.name=="city"?getAllCity?.data?.data:getAllTitles?.data?.da
       
        return (
          <Col key={field.name} xs={24} sm={24} lg={cols}>
            <Form.Item
              label={
                <span>
                  {field.label}{" "}
                  {field.tooltip && (
                    <Tooltip title={field.tooltip}>
                      <InfoCircleOutlined />
                    </Tooltip>
                  )}
                </span>
              }
              name={field.name}
              rules={[
                {
                  required: field.required,
                  message: `${field.label} is required`,
                },
              ]}
            >
              {field.type == "phone" ? (
                <PhoneInput
                  placeholder={field.placeholder}
                  enableSearch
                  country={"us"}
                  // value={this.state.phone}
                  // onChange={phone => this.setState({ phone })}
                />
              ) : field.type === "email" ? (
                <Input placeholder={field.placeholder} type="email" />
              ) : field.type === "password" ? (
                <Input.Password placeholder={field.placeholder} />
              ) : field.type === "select" ? (
                <>
                  <Select options={dataToOptions(selectData)} onSelect={(selected:any)=>onSelect(selected,field?.name)} />
                </>
              ) : (
                <Input placeholder={field.placeholder} />
              )}
            </Form.Item>
          </Col>
        );
      });
  
    return (
      <div className={"employerRegister"}>
   <Text
          typographyFontColor={"#3C65F5"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          Start for free Today
        </Text>
        <Title
          className="login-title"
          typographyType={{
            type: "semi-bold-semi-bold-semi-bold",
            size: "32px-24px-24px",
          }}
        >
          New Jobseeker
        </Title>
        <Text
          typographyFontColor={"#6c757d"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
         Jobseekers registration, building resumes and applying to vacancies is totally free of charge and no employment commission is required from our website.
        </Text>

        <Link className="about-us-link" href={"/about-us"}>
        <Text
          typographyFontColor={"#6c757d"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          Companies registration Instructions and Benefits
        </Text>
      </Link>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className={"formContainer"}
        >
          {/* Personal Account Information */}
          <FormCardSection title="Personal Account Information">
            <Row gutter={16}>
              {renderFormItems(jobseekerAccountInfo, 12)}
            </Row>
          </FormCardSection>
  
          {/* Targeted Job */}
          <FormCardSection title="Targeted Job">
            <Row gutter={16}>
              {renderFormItems(targetedJob, 24)}
            </Row>
          </FormCardSection>
  
          {/* Terms and Submit */}
          <Form.Item className={"termsContainer"}>
            <Checkbox>
              Agree to our terms and policy
            </Checkbox>
          </Form.Item>
  
          <Form.Item className={"submitButton"}>
          <Button className="btn-brand-1 hover-up" type="primary" htmlType="submit">
              Submit & Register
            </Button>
          </Form.Item>
  
          <div className={"signInLink"}>
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </Form>

        <Image className='footer-image' src={FormVector} alt="register"/>
      </div>
    );
  };
  

  
  export default EmployerRegister;