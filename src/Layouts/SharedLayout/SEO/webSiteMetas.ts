import Logo from "../../../public/Assets/Images/template/jobhub-logo.png";
// for Test
// import Agile from "../../../public/Assets/Images/General/404-cube.png"
//TODO change those
import {NextSeoProps} from "next-seo";


interface IwebSiteMetas {
    // [x: string]: MetaProps;

    [x: string]: NextSeoProps ;
}

export const webSiteURL = process.env.NEXT_PUBLIC_WEBSITE_URL


const defaultOgData = {
    images: [
        {
            url: webSiteURL + Logo?.src,
            width: 1200,
            height: 630,
            alt: 'Job Logo',
        },
    ],
    site_name: 'Job',
    type: 'website',
    locale: 'en_US',
}

export const defaultMetaData = {
    title: 'Job',
    description: 'Job is a software development company that offers application integration, UI/UX design, software development, and cybersecurity services. Contact us now.',
    canonical: 'https://www.Job.com',
    image: webSiteURL + Logo?.src,
    openGraph: {
        url: 'https://www.Job.com',
        title: 'Job - Software Development Company in the UAE & Australia ',
        description: 'Job is a software development company that offers application integration, UI/UX design, software development, and cybersecurity services. Contact us now.',
        ...defaultOgData
    },
    additionalMetaTags: [
        {
            name: 'keywords',
            content: 'software development, application integration, UI/UX design, cybersecurity',
        },
    ]
}

export const webSiteMetas: IwebSiteMetas = {

    '/': defaultMetaData,
    '/ContactUs': {
        title: 'Contact us - Software Development company in Australia & Dubai ',
        description: 'We provide software development & product design solutions for your business needs. Contact us for inquiries, partnerships, or to learn more about our services. ',
        canonical: 'https://www.Job.com/contact-us',
        openGraph: {
            url: 'https://www.Job.com/contact-us',
            title: 'Contact us - Software Development company in Australia & Dubai ',
            description: 'We provide software development & product design solutions for your business needs. Contact us for inquiries, partnerships, or to learn more about our services. ',
            site_name: 'Job',
            type: 'website',
            locale: 'en_US',
            images: [
                {
                    url: webSiteURL + Logo?.src,
                    width: 1200,
                    height: 630,
                    alt: 'Job Logo',
                },
            ],
        },
    },

    // about us
    '/AboutUs': {
        title: 'About Job-Your Reliable Software Development Partner ',
        description:
            'We are a software company in Dubai & Australia, a leader in App Integration, UI/UX, software development, & cybersecurity, adopting an Agile method. Let’s Talk ',
        canonical: 'https://www.Job.com/about-us',
        openGraph: {
            url: 'https://www.Job.com/about-us',
            title: 'Job - About Us',
            description:
                'We are a software company in Dubai & Australia, a leader in App Integration, UI/UX, software development, & cybersecurity, adopting an Agile method. Let’s Talk ',
            ...defaultOgData
        },
    },

    '/Careers': {
        title: 'Join Our Team | Exciting Career Opportunities | Job ',
        description: " Join Job's team for exciting career opportunities. We offer a supportive work environment with competitive benefits. Browse our open positions now! ",
        canonical: 'https://www.Job.com/careers',
        openGraph: {
            url: 'https://www.Job.com/careers',
            title: 'Job - Careers',
            description: " Join Job's team for exciting career opportunities. We offer a supportive work environment with competitive benefits. Browse our open positions now! ",
            ...defaultOgData
        },
    }, '/Careers/Apply': {
        title: 'Join Our Team | Exciting Career Opportunities | Job ',
        description: " Join Job's team for exciting career opportunities. We offer a supportive work environment with competitive benefits. Browse our open positions now! ",
        canonical: 'https://www.Job.com/careers',
        openGraph: {
            url: 'https://www.Job.com/careers',
            title: 'Job - Careers',
            description: " Join Job's team for exciting career opportunities. We offer a supportive work environment with competitive benefits. Browse our open positions now! ",
            ...defaultOgData
        },
    },
    '/Blogs': {
        title: 'Insights and News | Job\'s Technology Blogs',
        description: 'Stay updated with our blogs. Our expert writers cover Agile, UI/UX, Web/Mobile Development, Cybersecurity, and more. Explore the latest trends & insights now! ',
        canonical: 'https://www.Job.com/blogs',
        openGraph: {
            url: 'https://www.Job.com/blogs',
            title: 'Job - Blogs',
            description: 'Stay updated with our blogs. Our expert writers cover Agile, UI/UX, Web/Mobile Development, Cybersecurity, and more. Explore the latest trends & insights now! ',
            ...defaultOgData
        },
    },
    '/OurProcess/AgileDevelopment': {
        title: 'Our Process | Agile Development | Job ',
        description: "Job's process combines UI/UX design & Agile development to deliver exceptional products. Learn about our UI/UX process & Agile development approach. ",
        canonical: 'https://www.Job.com/our-process/agile-development',
        openGraph: {
            url: 'https://www.Job.com/our-process/agile-development',
            title: 'Our Process | Agile Development | Job ',
            description: "Job's process combines UI/UX design & Agile development to deliver exceptional products. Learn about our UI/UX process & Agile development approach. ",
            images: [
                {
                    url: webSiteURL + Logo.src,
                    width: 1200,
                    height: 630,
                    alt: 'Agile Development Image',
                },
            ],
        },
    },
    '/OurProcess/UIUXProcess': {
        title: 'Our Process | UI/UX Design | Job ',
        description: "Job's process combines UI/UX design & Agile development to deliver exceptional products. Learn about our UI/UX process & Agile development approach. ",
        canonical: 'https://www.Job.com/our-process/ui-ux-process',
        openGraph: {
            url: 'https://www.Job.com/our-process/ui-ux-process',
            title: 'Our Process | UI/UX Design | Job ',
            description: "Job's process combines UI/UX design & Agile development to deliver exceptional products. Learn about our UI/UX process & Agile development approach. ",
            images: [
                {
                    url: webSiteURL + Logo.src,
                    width: 1200,
                    height: 630,
                    alt: 'UI/UX Process Image',
                },
            ],
        },
    },
    '/Services/application-integration/SaaS-integration': {
        title: 'SaaS Integration Services | Job ',
        description: "Job offers advanced SaaS integration services to streamline your business operations & maximize the effectiveness of your SaaS applications. Let's connect!",
        canonical: 'https://www.Job.com/Services/application-integration/SaaS-integration',
        openGraph: {
            url: 'https://www.Job.com/Services/application-integration/SaaS-integration',
            title: 'SaaS Integration Services | Job ',
            description: "Job offers advanced SaaS integration services to streamline your business operations & maximize the effectiveness of your SaaS applications. Let's connect!",
            site_name: 'Job',
            type: 'website',
            locale: 'en_US',
            ...defaultOgData
        },
    },
    '/Services/application-integration/business-process-integration': {
        title: 'Business Process Integration Services | Job',
        description: "We offer customized Business Process Integration (BPI) services to enhance your workflow productivity. Get started by contacting an expert today! ",
        canonical: 'https://www.Job.com/Services/application-integration/business-process-integration',
        openGraph: {
            url: 'https://www.Job.com/Services/application-integration/business-process-integration',
            title: 'Business Process Integration Services | Job',
            description: "We offer customized Business Process Integration (BPI) services to enhance your workflow productivity. Get started by contacting an expert today! ",
            ...defaultOgData
        },
    }, '/Services/application-integration/api-integration': {
        title: 'API Integration Services | Job ',
        description: "We offer custom API development for desktop, mobile, & cloud apps. Trust our programmers to determine your API's requirements and security level. Contact us now ",
        canonical: 'https://www.Job.com/Services/application-integration/api-integration',
        openGraph: {
            url: 'https://www.Job.com/Services/application-integration/api-integration',
            title: 'API Integration Services | Job ',
            description: "We offer custom API development for desktop, mobile, & cloud apps. Trust our programmers to determine your API's requirements and security level. Contact us now ",
            ...defaultOgData
        },
    }, '/Services/application-integration/data-integration': {
        title: 'Data Integration Solutions | Job',
        description: "We deliver comprehensive data integration solutions to help you connect your infrastructure & unlock the potential of your business data. Let's grow together!",
        canonical: 'https://www.Job.com/Services/application-integration/data-integration',
        openGraph: {
            url: 'https://www.Job.com/Services/application-integration/data-integration',
            title: 'Data Integration Solutions | Job',
            description: "We deliver comprehensive data integration solutions to help you connect your infrastructure & unlock the potential of your business data. Let's grow together!",
            ...defaultOgData
        },
    }, '/Services/application-integration/data-lake': {
        title: 'Secure and Compliant Data Lake Solutions | Job',
        description: "We offer professional & scalable data lake solutions to store, manage, and analyze large amounts of data. Contact us to unlock the full potential of your data. ",
        canonical: 'https://www.Job.com/Services/application-integration/data-lake',
        openGraph: {
            url: 'https://www.Job.com/Services/application-integration/data-lake',
            title: 'Secure and Compliant Data Lake Solutions | Job',
            description: "We offer professional & scalable data lake solutions to store, manage, and analyze large amounts of data. Contact us to unlock the full potential of your data. ",
            ...defaultOgData
        },
    }, '/Services/UI-UX-Design/ui-ux-product-design': {
        title: 'Seamless Product Design (UI/UX) | Job',
        description: "Get started with our professionals to develop a compelling product that meets your needs. Transform your business with our product design UI/UX services now!",
        canonical: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-product-design',
        openGraph: {
            url: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-product-design',
            title: 'Seamless Product Design (UI/UX) | Job',
            description: "Get started with our professionals to develop a compelling product that meets your needs. Transform your business with our product design UI/UX services now!",
            ...defaultOgData
        },
    }, '/Services/UI-UX-Design/ui-ux-mobile': {
        title: 'Mobile App UI/UX Design Services | Job',
        description: "Boost user engagement with our UI/UX design services. We create top app designs for mobile, tablet, wearables, and TV. Contact us for mobile app design needs. ",
        canonical: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-mobile',
        openGraph: {
            url: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-mobile',
            title: 'Mobile App UI/UX Design Services | Job',
            description: "Boost user engagement with our UI/UX design services. We create top app designs for mobile, tablet, wearables, and TV. Contact us for mobile app design needs. ",
            ...defaultOgData
        },
    }, '/Services/UI-UX-Design/ui-ux-web': {
        title: 'Expert Web UI UX Design Services | Job',
        description: "Our web UI/UX design services effectively deliver both delightful & functional user experiences, integrating UX web design into Agile workflows. Let’s talk! ",
        canonical: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-web',
        openGraph: {
            url: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-web',
            title: 'Expert Web UI UX Design Services | Job',
            description: "Our web UI/UX design services effectively deliver both delightful & functional user experiences, integrating UX web design into Agile workflows. Let’s talk! ",
            ...defaultOgData
        },
    }, '/Services/UI-UX-Design/ui-ux-prototyping': {
        title: 'Custom Wireframe & Prototype Services | Job',
        description: "We offer wireframing & prototyping services to help you build an effective website or app. Let's create wireframes & prototypes that are user-friendly & catchy. ",
        canonical: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-prototyping',
        openGraph: {
            url: 'https://www.Job.com/Services/UI-UX-Design/ui-ux-prototyping',
            title: 'Custom Wireframe & Prototype Services | Job',
            description: "We offer wireframing & prototyping services to help you build an effective website or app. Let's create wireframes & prototypes that are user-friendly & catchy. ",
            ...defaultOgData
        },
    }, '/Services/software-development/web-development': {
        title: 'Web Development Services in Dubai & Australia | Job ',
        description: "Best Website Development Company in Australia & Dubai specializes in top-quality website design & development services. Contact us for a quote!",
        canonical: 'https://www.Job.com/Services/software-development/web-development',
        openGraph: {
            url: 'https://www.Job.com/Services/software-development/web-development',
            title: 'Web Development Services in Dubai & Australia | Job ',
            description: "Best Website Development Company in Australia & Dubai specializes in top-quality website design & development services. Contact us for a quote!",
            ...defaultOgData
        },
    }, '/Services/software-development/mobile-app': {
        title: 'Mobile App Development Services in Australia & Dubai | Job',
        description: "Trust us for quality mobile app development services. Our team of top app developers provides customized solutions using the latest technology. Contact us now! ",
        canonical: 'https://www.Job.com/Services/software-development/mobile-app',
        openGraph: {
            url: 'https://www.Job.com/Services/software-development/mobile-app',
            title: 'Mobile App Development Services in Australia & Dubai | Job',
            description: "Trust us for quality mobile app development services. Our team of top app developers provides customized solutions using the latest technology. Contact us now! ",
            ...defaultOgData
        },
    }, '/Services/software-development/cloud-development': {
        title: 'Cloud Development Services in Australia & Dubai | Job ',
        description: "Elevate your business to the cloud with our cloud development services with affordable solutions for infrastructure & application management. Contact us now! ",
        canonical: 'https://www.Job.com/Services/software-development/cloud-development',
        openGraph: {
            url: 'https://www.Job.com/Services/software-development/cloud-development',
            title: 'Cloud Development Services in Australia & Dubai | Job ',
            description: "Elevate your business to the cloud with our cloud development services with affordable solutions for infrastructure & application management. Contact us now! ",
            ...defaultOgData
        },
    }, '/Services/software-development/e-commerce': {
        title: 'Customized E-commerce Website Development | Job ',
        description: "Get a unique online store with our eCommerce web development services. Enhance user experience, raise conversion rates, & outperform competitors. Let's Talk. ",
        canonical: 'https://www.Job.com/Services/software-development/e-commerce',
        openGraph: {
            url: 'https://www.Job.com/Services/software-development/e-commerce',
            title: 'Customized E-commerce Website Development | Job ',
            description: "Get a unique online store with our eCommerce web development services. Enhance user experience, raise conversion rates, & outperform competitors. Let's Talk. ",
            ...defaultOgData
        },
    }, '/Services/cyber-security/network-security': {
        title: 'Expert Network Security Services | Job ',
        description: "Our Network Security Services (NSS) protect your network from cyberattacks, breaches, intrusions, and other threats with a holistic approach. Contact Us now! ",
        canonical: 'https://www.Job.com/Services/cyber-security/network-security',
        openGraph: {
            url: 'https://www.Job.com/Services/cyber-security/network-security',
            title: 'Expert Network Security Services | Job ',
            description: "Our Network Security Services (NSS) protect your network from cyberattacks, breaches, intrusions, and other threats with a holistic approach. Contact Us now! ",
            ...defaultOgData
        },
    }, '/Services/cyber-security/cloud-security': {
        title: 'Cloud Cybersecurity Services in Australia & Dubai | Job',
        description: "Protect your applications & data with Job's cloud security solutions. Safeguard against cyber threats and ensure infrastructure security. Contact us now!",
        canonical: 'https://www.Job.com/Services/cyber-security/cloud-security',
        openGraph: {
            url: 'https://www.Job.com/Services/cyber-security/cloud-security',
            title: 'Cloud Cybersecurity Services in Australia & Dubai | Job',
            description: "Protect your applications & data with Job's cloud security solutions. Safeguard against cyber threats and ensure infrastructure security. Contact us now!",
            ...defaultOgData
        },
    }, '/Services/cyber-security/mobile-security': {
        title: 'The Best Mobile Security Services in Australia & Dubai | Job ',
        description: "Protect your mobile devices and business with Job's mobile security services. Covering MDM, encryption, secure coding, and more. Contact us now! ",
        canonical: 'https://www.Job.com/Services/cyber-security/mobile-security',
        openGraph: {
            url: 'https://www.Job.com/Services/cyber-security/mobile-security',
            title: 'The Best Mobile Security Services in Australia & Dubai | Job ',
            description: "Protect your mobile devices and business with Job's mobile security services. Covering MDM, encryption, secure coding, and more. Contact us now! ",
            ...defaultOgData
        },
    }, '/Services/cyber-security/website-security': {
        title: 'Top Website Security Services in Dubai & Australia | Job',
        description: "Protect your online business with our website security solutions. Covering website protection, monitoring, and backup. Ensure business continuity. Let’s Talk! ",
        canonical: 'https://www.Job.com/Services/cyber-security/website-security',
        openGraph: {
            url: 'https://www.Job.com/Services/cyber-security/website-security',
            title: 'Top Website Security Services in Dubai & Australia | Job',
            description: "Protect your online business with our website security solutions. Covering website protection, monitoring, and backup. Ensure business continuity. Let’s Talk! ",
            ...defaultOgData
        },
    }, '/Services/cyber-security/IoT-security': {
        title: 'Best IoT Security Solutions in Dubai & Australia | Job',
        description: "Our IoT security solutions protect your connected devices from cyberattacks, including device hardening, network segmentation, & data encryption. Let's Discuss! ",
        canonical: 'https://www.Job.com/Services/cyber-security/IoT-security',
        openGraph: {
            url: 'https://www.Job.com/Services/cyber-security/IoT-security',
            title: 'Best IoT Security Solutions in Dubai & Australia | Job',
            description: "Our IoT security solutions protect your connected devices from cyberattacks, including device hardening, network segmentation, & data encryption. Let's Discuss! ",
            ...defaultOgData
        },
    }, '/dedicated-development-teams': {
        title: 'Dedicated Development Teams| Pick Your Team Service | Job ',
        description: "We make our committed development team available to you & give you access to a group of independent software engineers, developers, and designers. Hire Us Now! ",
        canonical: 'https://Job.com/dedicated-development-teams',
        openGraph: {
            title: 'Dedicated Development Teams| Pick Your Team Service | Job ',
            description: "We make our committed development team available to you & give you access to a group of independent software engineers, developers, and designers. Hire Us Now! ",
            url: 'https://Job.com/dedicated-development-teams',
            ...defaultOgData
        },
    },
    '/404': {
        title: '404 Page Not Found - Job',
        description: 'Oops! The page you are looking for is not found. Job - Your Reliable Software Development Partner.',
        openGraph: {
            title: '404 Page Not Found - Job',
            description: 'Oops! The page you are looking for is not found. Job - Your Reliable Software Development Partner.',
            site_name: 'Job',
            type: 'website',
            locale: 'en_US',
        }
    }
};