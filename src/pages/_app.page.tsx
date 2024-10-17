import type {AppProps} from 'next/app'
import './App.scss';
import React from "react";
import GeneralPages from './_generalPages';
import SystemPages from './_systemPages';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


function App(appProps: AppProps) {
    let {pageProps} = appProps;
    let pageType = pageProps.pageType ?? "general"
    let statusCode = pageProps.statusCode ?? ""
    let isSystemPages: boolean = pageType === "system" || statusCode === 404

    //TODO uncomment this
    // const hidden = useHiddenInspect()
    const isRTL = useRouter().locale === 'ar';

    return <div  dir={isRTL ? 'rtl' : 'ltr'} className={`App lang-${useRouter().locale}`}>
        {
            <>
                {isSystemPages ?
                    (
                        <>
                            <SystemPages {...appProps}/>
                        </>
                    ) :
                    (
                        <>
                            <GeneralPages {...appProps} />
                        </>
                    )}
            </>
        }
    </div>
}
export default appWithTranslation(App);


export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};