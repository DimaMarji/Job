import PageHeaderSection from "../../SharedComponent/PageHeaderSection/pageHeaderSection"

import BlogHeaderImage from "../../public/Assets/Images/page/blog/bg-breadcrumb.png"
import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";

import AboutImage from "../../public/Assets/Images/page/about/img-about2.png"
import Image from "next/image"
import { Card, Col, Divider, Row } from "antd";
import { Button } from "../../Components/Atoms/Button";
import { pricingList } from "./pricingData";

const Pricing:React.FC=()=>{
    return<div className="pricing-page">
  <PageHeaderSection key={"Pricing"} image={BlogHeaderImage?.src} title={"Pricing"} subTitle={""}/>
  <div className="pricing-table-text">
  <Title 
                   typographyFontColor={"#05264E"}
                   className='animate__ animate__fadeInUp our-company-title animated'
                   typographyType={{type: "bold-semi-bold-semi-bold", size: "32px-24px-24px"}}>
                        Pricing Table
                        </Title> 
                        <Text 
                   typographyType={{type: "regular-regular-regular", size: "18px-14px-14px"}}>
                       Choose The Best Plan That’s For You     </Text> 
                       </div>
<div className="pricing-list">
{pricingList?.map((item,index)=><Card className="pricing-card" key={index}>
    <Title className="pricing-title" typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "24px-20px-20px"}}>
        {item?.title}
    </Title>
    <Text typographyFontColor="#05264E" typographyType={{type: "regular-regular-regular", size: "14px-14px-14px"}}>{item?.price}</Text>
    <Divider/>
    <Button type="secondary">More Details</Button>
    </Card>)}
    </div>
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