import React from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Select, Tooltip } from 'antd';
import './styles.scss';
import PageHeaderSection from "../../SharedComponent/PageHeaderSection/pageHeaderSection";
import AboutHeaderImage from "../../public/Assets/Images/page/about/img-about.png";
import { MailOutlined } from '@ant-design/icons';

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";

const { Option } = Select;
const { TextArea } = Input;


const ContactUs: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

   return<div className='contact-us-page'>
       <PageHeaderSection key={"contact-us"}
                          image={AboutHeaderImage?.src}
                          title={"Contact Us"}
                          subTitle={" \n"}/>

                          <div>
                          <Title 
                   typographyFontColor={"#05264E"}
                   className='animate__ animate__fadeInUp animated'
                   typographyType={{type: "bold-semi-bold-semi-bold", size: "32px-24px-24px"}}>
                        Contact us
                        </Title> 
                        <Text 
                   typographyFontColor={"#4F5E64"}
                   typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                    
                    www.job.sy role is to keep good communication between users, job.sy is no stop service but our service to our users, like your job vacancies or resumes activation or any other financial or commercial issues; is only within our working hours as it shown below
                        </Text>         
                          </div>

                          <Row className='contact-us-row'>
                            <Col md={16}>
                            <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <Form.Item name="type" label="Select Type" rules={[{ required: true, message: 'Please select a type!' }]}>
        <Select placeholder="Select Type">
          <Option value="customer">Customer</Option>
          <Option value="partner">Partner</Option>
        </Select>
      </Form.Item>

      <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: 'Please input your full name!' }]}>
        <Input placeholder="Full Name" />
      </Form.Item>

      <Form.Item name="companyName" label="Company Name">
        <Input placeholder="Company Name" />
      </Form.Item>

      <Form.Item name="position" label="Position">
        <Input placeholder="Position" />
      </Form.Item>

      <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
        <Input placeholder="Your Email" />
      </Form.Item>

      <Form.Item name="mobileNumber" label="Mobile Number">
        <Input placeholder="Mobile Number" />
      </Form.Item>

      <Form.Item name="phoneNumber" label="Phone Number">
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input placeholder="Website" />
      </Form.Item>

      <Form.Item name="department" label="Select Department" rules={[{ required: true, message: 'Please select a department!' }]}>
        <Select placeholder="Select Department">
          <Option value="sales">Sales</Option>
          <Option value="support">Support</Option>
          <Option value="technical">Technical</Option>
        </Select>
      </Form.Item>

      <Form.Item name="description" label="Tell us about yourself">
        <TextArea rows={4} placeholder="Tell us about yourself" />
      </Form.Item>

      <Form.Item name="agreement" valuePropName="checked" rules={[{ required: true, message: 'Please agree to the terms and policy!' }]}>
        <Checkbox>
          By clicking contact us button, you agree our <a href="#">terms and policy</a>.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<MailOutlined />}>
          Send message
        </Button>
      </Form.Item>
    </Form>
                            </Col>
                            <Col md={8}>
                            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.837748602589!2d36.250462899999995!3d33.4274742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151921abdaac542b%3A0xcbf2e9ec39bd9349!2z2YXYtdmG2Lkg2LHZitmD2KfYqNmKINmE2YTZiNix2YI!5e0!3m2!1sen!2s!4v1726162622808!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
                            </Col>
                          </Row>
   </div>
  };

  
  export default ContactUs;