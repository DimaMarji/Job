import Logo from "../../../public/Assets/Images/template/jobhub-logo.png";
import {webSiteURL} from "./webSiteMetas";

export const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jobs",
    "url": "https://www.jobs.com",
    "logo": {
        "@type": "ImageObject",
        "url": webSiteURL + Logo?.src,
        "width": 1200,
        "height": 630,
        "alt": "Jobs Logo"
    },
    "description": "Jobs",
    "sameAs": [
        // facebookLink,
        // linkedinLink,
        // instagramLink
    ]
}