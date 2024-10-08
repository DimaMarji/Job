import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {

    return (
        <Html lang="en">
            <Head>
            <link rel="icon" href="/favicon.svg" sizes="any" />
                </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
