import {MetaProps} from '../../Atoms/Meta';
import React, {FunctionComponent} from 'react';
import {useRouter} from 'next/router';
import {NextSeo} from "next-seo";

interface SEOProps {
    webSiteMetas?: any,
    metaInfo?: MetaProps
}

const SEO: FunctionComponent<SEOProps> = ({webSiteMetas, metaInfo}) => {
    const {asPath,pathname} = useRouter();
    // let meta = (webSiteMetas && asPath && webSiteMetas[asPath] ) ?? metaInfo


    return (
        <>
            <NextSeo
                {...(webSiteMetas[pathname] ?? webSiteMetas[asPath])}
            />
        </>
        // meta &&
        //  <Meta {...meta} />


    );
}

export default SEO;