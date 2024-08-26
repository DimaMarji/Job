import React, {useState} from "react";
import {Affix, Card, Image, Space, Text, Title} from "../../Components";
import Vector from "../../public/Assets/Images/Career/Vector.svg"
import Logo from "../../public/Assets/Icons/Career/logo-icon.svg"
import "./styles.scss"
import LocationIcon from "../../public/Assets/Icons/Career/Location.svg"
import TimeIcon from "../../public/Assets/Icons/Career/Time Circle.svg"
import calendarIcon from "../../public/Assets/Icons/Career/calendar.svg"
import FacebookIcon from "../../public/Assets/Icons/Career/bxl_facebook.svg"
import LinkedInIcon from "../../public/Assets/Icons/Career/ri_linkedin-fill.svg"
import {useRouter} from "next/router";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import {ICareerJobOverviewCardProps} from "./interface";
import {webSiteURL} from "../../Layouts/SharedLayout/SEO/webSiteMetas";
import CopyIcon from "../../public/Assets/Icons/General/copy.svg"
import SuccessCopyIcon from "../../public/Assets/Icons/General/copy-success.svg"
import {copyToClipboard} from "../../Helpers/TextOperation";
import {FacebookShareButton, LinkedinShareButton} from "react-share";
import {useFooterInViewContext} from "../../Context/Layout/FooterInViewContext";

const AffixCard: React.FC<ICareerJobOverviewCardProps> = ({
                                                                          data,
                                                                          applyButton,
                                                                          type
                                                                      }) => {
    const router = useRouter()
    const {query, asPath} = router
    const {positionType} = query
    const {isMobileOrTablet} = useAppMediaQuery()
    const {footerInView} = useFooterInViewContext();

    const [copyIcon, setCopyIcon] = useState<string>(CopyIcon)

    const shareLink = webSiteURL + asPath


    const jobOverviewData = [{
        title: data?.job_type,
        icon: calendarIcon
    }, {
        //TODO change
        title: data?.time,
        icon: TimeIcon
    }, {
        title: data?.location,
        icon: LocationIcon
    },]

    const shareData = {
        Facebook: {
            icon: FacebookIcon,
            title: "Facebook"
        }, LinkedIn: {
            icon: LinkedInIcon,
            title: "LinkedIn"
        }
    }


    const jobCardItem = (item) => {
        return <Space key={item?.title ?? "card"}>
            <Image src={item?.icon} alt={"type"}/>
            <Text typographyType={{size: "16px-16px-16px", type: "regular-regular-regular"}}>
                {item?.title}
            </Text>
        </Space>
    }


    const shareJobContainer = <>
        <FacebookShareButton
            url={shareLink}
            className="share-link-button"
        >
            {jobCardItem(shareData["Facebook"])}
        </FacebookShareButton>
        <LinkedinShareButton
            url={shareLink}
            className="share-link-button"
        >
            {jobCardItem(shareData["LinkedIn"])}
        </LinkedinShareButton>
    </>


    const isShareCard = type=="share"


    const handleSuccessCopy = () => {
        setCopyIcon(SuccessCopyIcon)
        setTimeout(() => setCopyIcon(CopyIcon), 2000)

    }
    const CardContent = <>
        <div className={`job-overview-card-content ${positionType}-card`}>
            <Title typographyType={{size: "24px-18px-18px", type: "semi-bold-semi-bold-semi-bold"}}>
                {isShareCard ? "Share Via" : "Job Overview"}
            </Title>
            {isShareCard ? shareJobContainer
                : jobOverviewData?.map((item) => {
                    return jobCardItem(item)
                })}
            {
                isShareCard && <div className={"job-link-container"}>
                    <Title typographyType={{size: "16px-16px-16px", type: "semi-bold-semi-bold-semi-bold"}}>
                        Link to this job
                    </Title>

                    <div onClick={() => {
                        copyToClipboard(shareLink, handleSuccessCopy)
                    }} className={"job-link"}>
                        <Text typographyType={{size: "16px-16px-16px", type: "regular-regular-regular"}}
                              className={"job-link-to-copy"}
                              ellipsis={!isMobileOrTablet}
                        >
                            {shareLink}
                        </Text>
                        <Image width={20} src={copyIcon} alt={"copy"}/>
                    </div>

                </div>
            }
        </div>
        {applyButton}
    </>

    return <Affix style={{width: "100%"}}
                  className={(isMobileOrTablet || footerInView) ? "footer-in-view" : ""}
                  offsetTop={94}>
        <div>
            {isMobileOrTablet && !isShareCard ?
                <div className={`job-overview-card-content`}>
                    {CardContent}
                </div>
                : <Card className={"job-overview-card"}>
                    <div>
                        <Image className={"card-vector-image"} src={Vector} alt={"vector"}/>
                        <Image src={Logo} alt={"zcoderz-logo"}/>
                        {CardContent}
                    </div>
                </Card>}
        </div>
    </Affix>
}

export default AffixCard