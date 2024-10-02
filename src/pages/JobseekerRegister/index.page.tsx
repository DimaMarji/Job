import React from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Tooltip } from 'antd';
import styles from './EmployerRegister.module.scss';

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import { InfoCircleOutlined } from '@ant-design/icons';

interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  tooltip?: string;
}

const contactInfo: FormField[] = [
    { name: 'url', label: 'URL', tooltip: 'Website URL' },
    { name: 'poBox', label: 'P.O.Box', tooltip: 'P.O.Box' },
    { name: 'country', label: 'Residence Country', required: true, tooltip: 'Country of residence' },
    { name: 'city', label: 'Residence City', required: true, tooltip: 'City of residence' },
    { name: 'address', label: 'Address', tooltip: 'Company address' },
    { name: 'phone', label: 'Phone', required: true, tooltip: 'Phone number' },
    { name: 'mobile', label: 'Mobile', required: true, tooltip: 'Mobile number' },
  ];
  
  const contactPersonInfo: FormField[] = [
    { name: 'title', label: 'Title', required: true, tooltip: 'Title (e.g., Mr./Mrs.)' },
    { name: 'fullName', label: 'Full Name', required: true, tooltip: 'Full Name' },
    { name: 'position', label: 'Position', required: true, tooltip: 'Job Position' },
    { name: 'email', label: 'Email', required: true, type: 'email', tooltip: 'Contact Email' },
    { name: 'phone', label: 'Phone', required: true, tooltip: 'Phone number' },
    { name: 'mobile', label: 'Mobile', required: true, tooltip: 'Mobile number' },
  ];

const companyAccountInfo: FormField[] = [
  { name: 'username', label: 'User Name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const companyNameInfo: FormField[] = [
  { name: 'arabicName', label: 'Arabic Name' },
  { name: 'englishName', label: 'English Name' },
];


const companyActivityInfo: FormField[] = [
  { name: 'activityField', label: 'Activity Field' },
];


const EmployerRegister: React.FC = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
      console.log('Form values:', values);
    };
  
    const renderFormItems = (fields: FormField[], cols: number) =>
      fields.map((field) => (
        <Col key={field.name} span={cols}>
          <Form.Item
            label={
              <span>
                {field.label}{' '}
                {field.tooltip && (
                  <Tooltip title={field.tooltip}>
                    <InfoCircleOutlined />
                  </Tooltip>
                )}
              </span>
            }
            name={field.name}
            rules={[
              { required: field.required, message: `${field.label} is required` },
            ]}
          >
            {field.type === 'email' ? (
              <Input type="email" />
            ) : field.type === 'password' ? (
              <Input.Password />
            ) : (
              <Input />
            )}
          </Form.Item>
        </Col>
      ));
  
    return (
      <div className={styles.employerRegister}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className={styles.formContainer}
        >
          {/* Contact Information */}
          <Section title="Contact Information">
            <Row gutter={16}>
              {renderFormItems(contactInfo, 12)}
            </Row>
          </Section>
  
          {/* Contact Person */}
          <Section title="Contact Person">
            <Row gutter={16}>
              {renderFormItems(contactPersonInfo, 12)}
            </Row>
          </Section>
  
          {/* Terms and Submit */}
          <Form.Item className={styles.termsContainer}>
            <Checkbox>
              Agree to our terms and policy
            </Checkbox>
          </Form.Item>
  
          <Form.Item className={styles.submitButton}>
            <Button type="primary" htmlType="submit">
              Submit & Register
            </Button>
          </Form.Item>
  
          <div className={styles.signInLink}>
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </Form>
      </div>
    );
  };
  
  const Section: React.FC<{ title: string,children:any }> = ({ title, children }) => (
    <div className={styles.section}>
      <h3>{title}</h3>
      {children}
    </div>
  );
  
  export default EmployerRegister;