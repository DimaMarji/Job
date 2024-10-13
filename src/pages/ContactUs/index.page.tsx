import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select, Space, Tooltip } from "antd";
import "./styles.scss";
import PageHeaderSection from "../../SharedComponent/PageHeaderSection/pageHeaderSection";
import AboutHeaderImage from "../../public/Assets/Images/page/about/img-about.png";
import { MailOutlined } from "@ant-design/icons";

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const { Option } = Select;
const { TextArea } = Input;

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact-us-page">
      <PageHeaderSection
        key={"contact-us"}
        image={AboutHeaderImage?.src}
        title={"Contact Us"}
        subTitle={" \n"}
      />

      <div className="contact-second">
        <Title
          typographyFontColor={"#05264E"}
          className="animate__ animate__fadeInUp animated"
          typographyType={{
            type: "bold-semi-bold-semi-bold",
            size: "32px-24px-24px",
          }}
        >
          Contact us
        </Title>
        <Text
          typographyFontColor={"#4F5E64"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          www.job.sy role is to keep good communication between users, job.sy is
          no stop service but our service to our users, like your job vacancies
          or resumes activation or any other financial or commercial issues; is
          only within our working hours as it shown below
        </Text>
      </div>

      <div
        className={"contact-info"}
        dangerouslySetInnerHTML={{ __html: "" }}
      />

      <Row className="contact-us-row">
        <Col md={16}>
        <Title
              typographyFontColor={"#05264E"}
              className="animate__ animate__fadeInUp animated"
              typographyType={{
                type: "bold-semi-bold-semi-bold",
                size: "32px-24px-24px",
              }}
            >
              Contact us
            </Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
         
            <Form.Item
              name="type"
              rules={[{ required: true, message: "Please select a type!" }]}
            >
              <Select placeholder="Select Type">
                <Option value="customer">Customer</Option>
                <Option value="partner">Partner</Option>
              </Select>
            </Form.Item>
            <Row gutter={24}>
              <Col md={12}>
              <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
              </Col>
              <Col md={12}>
              <Form.Item name="companyName">
              <Input placeholder="Company Name" />
            </Form.Item>

              </Col>
            </Row>

           
            <Row gutter={24}>
            <Col md={12}>
         
            <Form.Item name="position" >
              <Input placeholder="Position" />
            </Form.Item>
            </Col>
            <Col md={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
            </Col>
            </Row>
            <Row gutter={24}>
            <Col md={12}>
            <Form.Item name="mobileNumber" >
            <PhoneInput
            placeholder="Mobile Number"
              enableSearch
  country={'us'}
  // value={this.state.phone}
  // onChange={phone => this.setState({ phone })}
/>
            </Form.Item>
            </Col>
            <Col md={12}>
            <Form.Item name="phoneNumber" >
              {/* <Input placeholder="Phone Number" /> */}

              <PhoneInput
               placeholder="Phone Number" 
              enableSearch
  country={'us'}
  // value={this.state.phone}
  // onChange={phone => this.setState({ phone })}
/>
            </Form.Item>
            </Col>
            </Row>

            <Row gutter={24}>
            <Col md={12} sm={24} xs={24}>
            <Form.Item name="website">
              <Input placeholder="Website" />
            </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
            <Form.Item
              name="department"
              rules={[
                { required: true, message: "Please select a department!" },
              ]}
            >
              <Select placeholder="Select Department">
                <Option value="sales">Sales</Option>
                <Option value="support">Support</Option>
                <Option value="technical">Technical</Option>
              </Select>
            </Form.Item>
            </Col>
            </Row>


            <Form.Item name="description">
              <TextArea rows={10} placeholder="Tell us about yourself" />
            </Form.Item>

            <Space style={{gap:22}}>
            <Form.Item>
              <Button className="btn-send-message" type="primary" htmlType="submit">
                Send message
              </Button>
            </Form.Item>
         
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please agree to the terms and policy!",
                },
              ]}
            >
              <Checkbox>
                By clicking contact us button, you agree our{" "}
                <a href="#">terms and policy</a>.
              </Checkbox>
            </Form.Item>
            </Space>
          </Form>
        </Col>
        <Col md={8}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6652.002356174926!2d36.291175!3d33.527355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e73c312816bb%3A0xa7e036597c24c5fc!2sSyriajob%20Ltd.!5e0!3m2!1sen!2snl!4v1728669744058!5m2!1sen!2snl"   loading="lazy"  ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
