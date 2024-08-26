import React, { createContext, useContext } from "react";

interface FooterInViewContextProps {
    footerInView: boolean;
    children: React.ReactNode;
}

const FooterInViewContext = createContext<FooterInViewContextProps | undefined>(undefined);

export const useFooterInViewContext = () => {
    const context = useContext(FooterInViewContext);
    if (!context) {
        throw new Error("useFooterInViewContext must be used within a FooterInViewProvider");
    }
    return context;
};

export const FooterInViewProvider: React.FC<FooterInViewContextProps> = ({ footerInView, children }) => {
    return <FooterInViewContext.Provider value={{ footerInView, children }}>{children}</FooterInViewContext.Provider>;
};