import React from "react";
import {facebookLink, instagramLink, linkedinLink} from "../../../Constants";
import Facebook from "../../../public/Assets/Icons/SocialMedia/facebook.svg";
import DarkFacebook from "../../../public/Assets/Icons/SocialMedia/dark-facebook.svg";
import LinkedIN from "../../../public/Assets/Icons/SocialMedia/linkedIn.svg";
import DarkLinkedIN from "../../../public/Assets/Icons/SocialMedia/dark-linkedin.svg";
import Behance from "../../../public/Assets/Icons/SocialMedia/behance.svg";
import DarkBehance from "../../../public/Assets/Icons/SocialMedia/dark-behance.svg";


export const socialMediaData = [
    {platform: 'Facebook', link: facebookLink, icon: Facebook, darkIcon: DarkFacebook},
    {platform: 'Linkedin', link: linkedinLink, icon: LinkedIN, darkIcon: DarkLinkedIN},
    {platform: 'Instagram', link: instagramLink, icon: Behance, darkIcon: DarkBehance},
];

export const ourServicesData = [
    {
        title: "UI UX Design",
        key:"UI-UX-Design",
        items: [
            {label: "Mobile UI UX Design", key: "ui-ux-mobile"},
            {label: "Product Design (UI-UX)", key: "ui-ux-product-design"},
            {label: "Prototyping & Wireframing", key: "ui-ux-prototyping"},
            {label: "Web UI UX Design", key: "ui-ux-web"}
        ]
    },
    {
        title: "Software Development",
        key:"software-development",
        items: [
            {label: "Web Development", key: "web-development"},
            {label: "Mobile App Development", key: "mobile-app"},
            {label: "E-commerce web development", key: "e-commerce"},
            {label: "Cloud development", key: "cloud-development"}
        ]
    },
    {
        title: "Application Integration",
        key:"application-integration",
        items: [
            {label: "API Integration", key: "api-integration"},
            {label: "Business Process Integration", key: "business-process-integration"},
            {label: "Data Integration", key: "data-integration"},
            {label: "Data Lake", key: "data-lake"},
            {label: "SaaS Integration", key: "SaaS-integration"}
        ]
    },
    {
        title: "Cyber Security",
        key: "cyber-security",
        items: [
            {label: "Website Security", key: "website-security"},
            {label: "Mobile Security", key: "mobile-security"},
            {label: "Network Security", key: "network-security"},
            {label: "IOT Security", key: "IoT-security"},
            {label: "Cloud Cyber Security", key: "cloud-security"}
        ]
    }
];


