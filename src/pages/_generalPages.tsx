import {AppContextsContextProvider} from '../Context/appContexts'
import type {AppProps} from 'next/app'
import {QueryClientProvider,} from 'react-query'
import React from "react";
import {useRouter} from 'next/router';
import {ErrorBoundary} from "react-error-boundary";
import {usePageState} from '../Hooks/window/pageState/use-page-state';
import {defaultMetaData, webSiteMetas} from "../Layouts/SharedLayout/SEO/webSiteMetas";
import {queryClient} from "./queryClient";
import Schema from "../Components/Molecules/Schema/schemaContainer";
import {schemaData} from "../Layouts/SharedLayout/SEO/schemaData";
import {DefaultSeo} from 'next-seo';
import SEO from "../Components/Molecules/Seo/seoConainer";
import {Loading} from "./Loading";
import {Error500} from "./Error500";
import {SharedLayout} from "../Layouts/SharedLayout";


export default function GeneralPages({Component, pageProps}: AppProps) {

    const {pathname} = useRouter()

    const {loading} = usePageState()
    let withLoading = pageProps.withLoading ?? true

    const noLayoutRoutes = ['/Login', '/Register']; 


    return <div className="App">

        <DefaultSeo
            {...defaultMetaData}
        />
        {
            <>

                <QueryClientProvider client={queryClient}>
                    {/* contexts */}

                    <AppContextsContextProvider>
                        {/* router */}
                            {/* APP */}
                            {
                                loading ? withLoading && <Loading isLoading={loading} disableScroll={loading}/>
                                    :
                                    noLayoutRoutes.includes(pathname)?
                                    <ErrorBoundary fallback={<Error500 />
                                    }>
                                        <Schema schemaData={schemaData}/>
                                        <SEO webSiteMetas={webSiteMetas}/>
                                        <Component {...pageProps} />
                                    </ErrorBoundary>
                                    :
                                    <SharedLayout>
                                                <ErrorBoundary fallback={<Error500 />
                                                }>
                                                    <Schema schemaData={schemaData}/>
                                                    <SEO webSiteMetas={webSiteMetas}/>
                                                    <Component {...pageProps} />
                                                </ErrorBoundary>

                                    </SharedLayout>
                                }
                    </AppContextsContextProvider>
                </QueryClientProvider>
            </>
        }
    </div>
}


