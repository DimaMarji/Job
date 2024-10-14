import React from "react";
import {UserProvider} from "./User/userContext";


const AppContextsContext = React.createContext<any>({});

const AppContextsContextProvider = (props: any) => {
    return (
        <AppContextsContext.Provider
            value={{}}>
            <UserProvider>

            {props.children}
            </UserProvider>
        </AppContextsContext.Provider>
    );
};

export {AppContextsContextProvider, AppContextsContext};

