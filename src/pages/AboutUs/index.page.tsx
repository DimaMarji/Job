import React from 'react'
import { Checkbox, Col, Form, Input, Row, Tooltip } from 'antd';

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import PageHeaderSection from '../../SharedComponent/PageHeaderSection/pageHeaderSection';
import AboutHeaderImage from "../../public/Assets/Images/page/about/img-about.png"
import "./styles.scss"
import Image from "next/image"
import AboutImage from "../../public/Assets/Images/page/about/img-about2.png"
import { AboutUsData } from './aboutUsData';
import { Button } from '../../Components/Atoms/Button';
import { OurBlogsSection } from '../Home/OurBlogsSection';


const AboutUs: React.FC = () => {
   return<div className='about-us-page'>
           <PageHeaderSection key={"about-us"} 
           image={AboutHeaderImage?.src} 
           title={"About Us"} 
           subTitle={"Get the latest news, updates and tips"}/>

           <div className='our-company-section'>
           <Title 
                   typographyFontColor={"#A0ABB8"}
                   typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-16px-16px"}}>
                        OUR COMPANY
                        </Title> 
                        <Title 
                   typographyFontColor={"#05264E"}
                   className='animate__ animate__fadeInUp our-company-title animated'
                   typographyType={{type: "bold-semi-bold-semi-bold", size: "32px-24px-24px"}}>
                        About Our Company
                        </Title> 
                        <Text 
                   typographyFontColor={"#4F5E64"}
                   typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.
                        </Text> 
           </div>
           <Row className='about-us-row'>
                <Col md={12}>
                <Image alt='about' src={AboutImage}/>
                </Col>

                <Col md={12}>
                <Title 
                typographyFontColor='#05264E'
                className='what-title'
                   typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "26px-20px-20px"}}>
                        What we can do?
                        </Title> 
                <Text 
                   typographyFontColor={"#05264E"}
                   typographyType={{type: "regular-regular-regular", size: "16px-16px-16px"}}>
                       {AboutUsData?.aboutUsText}      </Text> 
                       <Button className='read-more btn-brand-1' type='primary'>
                        Read More
                       </Button>
                </Col>
           </Row>
           <OurBlogsSection/>
   </div>
  };

  
  export default AboutUs;