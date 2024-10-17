import type {AppProps} from 'next/app'
import React from "react";

export default function SystemPages({Component, pageProps}: AppProps) {
    return <div className="App">
        <Component {...pageProps}  />
    </div>
}
