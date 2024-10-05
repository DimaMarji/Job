import React from 'react'
import { Button, Checkbox, Col, Form, Input, Row, Tooltip } from 'antd';
import styles from './EmployerRegister.module.scss';

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import { InfoCircleOutlined } from '@ant-design/icons';
import PageHeaderSection from '../../SharedComponent/PageHeaderSection/pageHeaderSection';
import AboutHeaderImage from "../../public/Assets/Images/page/about/img-about.png"
import "./styles.scss"


const AboutUs: React.FC = () => {
   return<div className='about-us-container'>
           <PageHeaderSection key={"about-us"} 
           image={AboutHeaderImage?.src} 
           title={"About US"} 
           subTitle={"Get the latest news, updates and tips"}/>

   </div>
  };

  
  export default AboutUs;