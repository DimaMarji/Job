import React  from 'react';
import { Router } from 'next/router';

// use Page State
export const usePageState = (pathName?: string) => {

    // console.log("usePageState");

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      const start = () => {
        // console.log("start");
        setLoading(true);
      };

      const end = () => {
        // console.log("finished");
        setLoading(false);
      };

      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);

      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };

    }, []);
  
    return {
        loading
    };
};