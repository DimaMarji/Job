import React from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Tooltip } from 'antd';
import styles from './ContactUs.module.scss';
import PageHeaderSection from "../../SharedComponent/PageHeaderSection/pageHeaderSection";
import AboutHeaderImage from "../../public/Assets/Images/page/about/img-about.png";


const ContactUs: React.FC = () => {
   return<>
       <PageHeaderSection key={"contact-us"}
                          image={AboutHeaderImage?.src}
                          title={"Contact US"}
                          subTitle={"Get the latest news, updates and tips"}/>
   </>
  };

  
  export default ContactUs;