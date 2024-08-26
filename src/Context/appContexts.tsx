import React from "react";


const AppContextsContext = React.createContext<any>({});

const AppContextsContextProvider = (props: any) => {
    return (
        <AppContextsContext.Provider
            value={{}}>

            {props.children}
        </AppContextsContext.Provider>
    );
};

export {AppContextsContextProvider, AppContextsContext};

