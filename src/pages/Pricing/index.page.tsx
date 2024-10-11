import PageHeaderSection from "../../SharedComponent/PageHeaderSection/pageHeaderSection"
import "./styles.scss"

import BlogHeaderImage from "../../public/Assets/Images/page/blog/bg-breadcrumb.png"
import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";

import AboutImage from "../../public/Assets/Images/page/about/img-about2.png"
import Image from "next/image"
import { Col, Row } from "antd";
import { Button } from "../../Components/Atoms/Button";

const Pricing:React.FC=()=>{
    return<div className="pricing-page">
  <PageHeaderSection key={"Pricing"} image={BlogHeaderImage?.src} title={"Pricing"} subTitle={""}/>
  <Row className='pricing-us-row'>
                <Col md={12}>
                <Image alt='pricing' src={AboutImage}/>
                </Col>

                <Col md={12}>
                <Title 
                typographyFontColor='#05264E'
                className='what-title'
                   typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "26px-20px-20px"}}>
                       Pricing System
                        </Title> 
                <Text 
                   typographyFontColor={"#4F5E64"}
                   typographyType={{type: "regular-regular-regular", size: "16px-16px-16px"}}>
                      Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.

Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.

    </Text> 
                       <Button  type='secondary'>
                        Contact us
                       </Button>
                </Col>
           </Row>
       
    </div>
}

export default Pricing