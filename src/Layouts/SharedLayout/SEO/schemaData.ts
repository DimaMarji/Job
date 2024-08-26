import Logo from "../../../public/Assets/Images/Logo/Tenmil-logo.png";
import {facebookLink, instagramLink, linkedinLink} from "../../../Constants";
import {webSiteURL} from "./webSiteMetas";

export const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zcoderz",
    "url": "https://www.zcoderz.com",
    "logo": {
        "@type": "ImageObject",
        "url": webSiteURL + Logo?.src,
        "width": 1200,
        "height": 630,
        "alt": "Zcoderz Logo"
    },
    "description": "Zcoderz is a software development company that offers application integration, UI/UX design, software development, and cybersecurity services.",
    "sameAs": [
        facebookLink,
        linkedinLink,
        instagramLink
    ]
}