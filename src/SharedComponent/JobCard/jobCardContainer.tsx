import React from 'react';
import {Card, Tag, Button, Row, Col, Space, Divider} from 'antd';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import './styles.scss';
import Image from "next/image";
import {Title} from "../../Components/Atoms/Typography/Title";
import {Text} from "../../Components/Atoms/Typography/Text";
import LogoImage from "../../public/Assets/Images/template/bg-newsletter.svg";
import LocationIcon from "../../public/Assets/Images/template/icons/location.svg";

interface JobCardProps {
  data:any
}

const JobCard: React.FC<JobCardProps> = ({
data
}) => {
    return (
            <Card className={"job-card hover-up"}
                  title={<div className={"job-card-footer"}><Space>
                      <Image alt={"company-logo"}
                             className={"company-logo-image"} src={LogoImage}/>
                      <Space direction={"vertical"} align={"start"}>
                          <Title
                              className={"name-job"}
                              typographyType={{
                                  type: "semi-bold-semi-bold-semi-bold",
                                  size: "14px-14px-14px"
                              }}>Adobe Illustrator</Title>
                          <Space>
                              <Image alt={"location-icon"}
                                     width={12}
                                     src={LocationIcon}/>
                              <Text
                                  typographyType={{
                                      type: "regular-regular-regular",
                                      size: "12px-12px-12px"
                                  }}
                                  typographyFontColor={"#A0ABB8"}>
                                  Damascus
                              </Text>
                          </Space>
                      </Space>
                  </Space>
                      <div className={"tags-container"}>
                          <Tag>
                              Education
                          </Tag>
                          <Tag>
                              Education
                          </Tag>
                          <Tag>
                              Education
                          </Tag>

                      </div>

                  </div>}>

                <Title
                    typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "18px-16px-16px"
                    }}>UI Ux Designer</Title>
                <div className={"job-info"}>
                    <div>
                        <Text
                            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Job Id:
                        </Text>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            5473
                        </Text>
                    </div>
                    <div>
                        <Text
                            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Job Type:
                        </Text>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            5473
                        </Text>
                    </div>
                    <div>
                        <Text
                            typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Education Level:
                        </Text>
                        <Text
                            typographyType={{type: "regular-regular-regular", size: "12px-12px-12px"}}
                            typographyFontColor={"#A0ABB8"}>
                            Master Degree
                        </Text>
                    </div>
                </div>
                <Divider/>
                <div className={"job-card-footer"}>
                <Space >
                    <Space>
                        <CalendarOutlined style={{color: "#A0ABB8"}}/>
                    {/*<Image alt={"location-icon"}*/}
                    {/*       width={12}*/}
                    {/*       src={LocationIcon}/>*/}
                    <Text
                        typographyType={{
                            type: "regular-regular-regular",
                            size: "12px-12px-12px"
                        }}
                        typographyFontColor={"#A0ABB8"}>
                        Damascus
                    </Text>
                    </Space>
                <Space align={"center"}>
                    <CalendarOutlined style={{color: "#A0ABB8"}}/>
                        <Text
                            typographyType={{
                                type: "regular-regular-regular",
                                size: "12px-12px-12px"
                            }}
                            typographyFontColor={"#A0ABB8"}>
                            Damascus
                        </Text>
                    </Space>
                </Space>
                    <Button type={"primary"}>
                        Apply now
                    </Button>
                </div>
            </Card>
    );
};

export default JobCard;
