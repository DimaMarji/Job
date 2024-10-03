import {useRouter} from "next/router";

const useUrl = () => {
    const router = useRouter();

    const getAllParams = () => {
        const params = new URLSearchParams(window.location.search);
        const paramsObj = {};

        params.forEach((value, key) => {
            paramsObj[key] = value;
        });

        return paramsObj;
    };

    const getParam = (paramName) => {
        const params = new URLSearchParams(router.asPath.split("?")[1] || "");
        const param = params.get(paramName);
        if (param) {
            try {
                return param;
            } catch (error) {
                return param;
            }
        } else {
            return null;
        }
    };

    const addParam = (param) => {
        const params = {...getAllParams(), ...param};
        const queryString = new URLSearchParams(params).toString();
        router.push(`?${queryString}`);
    };

    const addParamTOTable = (params) => {
        const url = new URL(window.location.href);
        const paramsIns = new URLSearchParams(url.search);
        const queryString = JSON.stringify(params);
        paramsIns.set("table-params", queryString);
        url.search = paramsIns.toString();
        window.history.pushState({}, "", url.toString());
    };

    const removeParam = (paramName) => {
        const params = new URLSearchParams(router.asPath.split("?")[1] || "");
        params.delete(paramName);
        const queryString = params.toString();

        // Check if the queryString is empty
        if (queryString) {
            router.push(`?${queryString}`);
        } else {
            // Remove the "?" from the URL if it is the last parameter
            const urlWithoutQueryString = router.asPath.split("?")[0];
            router.push(urlWithoutQueryString);
        }
    };

    const removeParams = (paramsNames) => {
        const params = new URLSearchParams(router.asPath.split("?")[1] || "");
        paramsNames.forEach((paramName) => {
            params.delete(paramName);
        });
        const queryString = params.toString();
        router.push(`?${queryString}`);
    };

    const removeAllParams = () => {
        router.push(router.pathname);
    };

    const updateParams = (paramsToAdd, paramsToDelete: string[]) => {
        const params = new URLSearchParams(router.asPath.split("?")[1] || "");

        console.log(paramsToAdd,params)

        // Add parameters
        paramsToAdd.forEach((param) => {
            const paramName = Object.keys(param)[0];
            const paramValue = param[paramName];
            params.set(paramName, paramValue);
        });

        // Delete parameters
        paramsToDelete.forEach((paramName) => {
            params.delete(paramName);
        });

        const queryString = params.toString();
        router.push(`?${queryString}`);
    };

    return {
        getParam,
        getAllParams,
        addParam,
        removeParam,
        removeParams,
        removeAllParams,
        addParamTOTable,
        updateParams
    };
};

export default useUrl;