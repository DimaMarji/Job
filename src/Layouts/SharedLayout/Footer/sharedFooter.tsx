import React from 'react';
import "./style.scss"
import LogoImage from "../../../public/Assets/Icons/menu.svg";
import LocationIcon from "../../../public/Assets/Icons/SocialMedia/linkedIn.svg";
import EmailIcon from "../../../public/Assets/Icons/SocialMedia/linkedIn.svg";
import PhoneIcon from "../../../public/Assets/Icons/SocialMedia/linkedIn.svg";
import Image from 'next/image'
import {useRouter} from 'next/router';
import {pagesFooterItemsData} from "./constant";
import {Button} from "../../../Components/Atoms/Button";
import {Divider, Layout, Space} from "antd";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";

const {Footer} = Layout

const SharedFooter = () => {
    //TODO from api
    const contactInfo = {
        office: {
            address: "Canada."
        },
        email: "mail",
        phone: "tel"
    }

    const router = useRouter()
    const {push, query, asPath} = router
    const handleRedirect = (to: any) => {
        push(to)
    }

    const currentYear = new Date().getFullYear()

    const blogsFooterItems = []?.map((item: any) => {
        return {
            label: item?.title,
            key: [`/Blogs/${item?.title}`, `/blogs/${item?.title}`],
        }
    })

    const LogoButton = <Button onClick={() => {
        push("/")
    }} className={"company-logo-button"} type={'link'} href={"/"} target={"_blank"}>
        <Image
            width={191}
            height={54}
            alt={"company-logo-image"} className={"company-logo-image"} src={LogoImage}

        />
    </Button>

    const isSelected = (item) => {
        return item.key === '/'
            ? asPath === item.key
            : Array.isArray(item.key)
                ? item.key.some(key => asPath.startsWith(key))
                : asPath.startsWith(item.key)
    }

    const footerColumns = [{
        title: "Pages",
        items: pagesFooterItemsData
    }, {
        title: "Blogs",
        items: blogsFooterItems
    },]
    const FooterList = footerColumns?.map((item, key) => {
        return <div key={key} className={`${item?.title?.toLowerCase()}-container`}>
            <Title typographyType={{size: "20px-20px-20px", type: "semi-bold-semi-bold-semi-bold"}}
                   className={"title-text"}
                   level={3}
                   typographyFontColor={"#509DD0"}>
                {item?.title}
            </Title>
            <div className={"footer-list"}>
                {item?.items?.map((item, index) => {
                    return <Text key={index}
                                 onClick={(event) => {
                                     push(item?.key[0], item?.key[1], {scroll: true})
                                 }}
                                 typographyFontColor={"#FFFFFF"}
                                 className={`footer-link ${isSelected(item) ? "footer-link-selected" : ""}`}
                                 typographyType={{
                                     size: "16px-16px-16px",
                                     type: "regular-regular-regular"
                                 }}
                    >{item?.label}</Text>
                })}
            </div>
        </div>
    })



    return (
        <>
            <Footer className={"website-footer"}>
                <div className={"footer-content"}>
                    {LogoButton}

                    {FooterList}

                    <div className={"contact-container"}>
                        <Title typographyType={{size: "20px-20px-20px", type: "semi-bold-semi-bold-semi-bold"}}
                               className={"title-text"}
                               level={3}
                               typographyFontColor={"#509DD0"}>
                            Contact Us
                        </Title>

                        <div className={"our-offices"}>

                            <div>
                                <Space align={"start"}>
                                    <Image
                                        width={24}
                                        alt={"contact"} src={LocationIcon}

                                    />
                                    <Title
                                        level={4}
                                        typographyType={{
                                            size: "16px-16px-16px",
                                            type: "regular-regular-regular"
                                        }}
                                        typographyFontColor={"#FFFFFF"}
                                        className={"address-text footer-link"}
                                    >
                                        {contactInfo?.office?.address}
                                    </Title>
                                </Space>
                                <div className={"info-details"}>
                                    <Space align={"start"}>
                                        <Image
                                            width={24}
                                            alt={"contact"} src={PhoneIcon}

                                        /> <Text
                                        typographyFontColor={"#FFFFFF"}
                                        onClick={() => handleRedirect(`tel:${contactInfo?.phone}`)}
                                        className={"footer-link"}
                                        typographyType={{
                                            size: "16px-16px-16px",
                                            type: "regular-regular-regular"
                                        }}
                                    >{contactInfo?.phone}</Text>
                                    </Space>

                                    <Space align={"start"}>
                                        <Image
                                            width={24}
                                            alt={"contact"} src={EmailIcon}

                                        />
                                        <Text typographyType={{
                                            size: "16px-16px-16px",
                                            type: "regular-regular-regular"
                                        }} typographyFontColor={"#FFFFFF"}
                                              onClick={() => handleRedirect(`mailto:${contactInfo?.email}`)}
                                              className={"footer-link"}>{contactInfo?.email}</Text>
                                    </Space>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={"divider-div"}>
                    <Divider className={"tenmil-footer-divider"}/>
                </div>
                <div className={"copyright-div"}>
                    <span className={"copyright-span"}>
                        <Text typographyFontColor={"#9C9EA5"}
                              typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}
                              className={"copyright-text"}
                        >
                            Tenmil@{currentYear} | All rights reserved
                        </Text>
                    </span>
                </div>
            </Footer>
        </>
    );

}
export default SharedFooter;
