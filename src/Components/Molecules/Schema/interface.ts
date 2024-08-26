export interface ISchemaProps{
    schemaData?:IOrganizationSchema
}

interface IOrganizationSchema {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    logo: {
        "@type": string;
        url: string;
        width: number;
        height: number;
        alt: string;
    };
    description: string;
    sameAs: string[];
}