import { Text } from "../Components/Atoms/Typography/Text";
import React from "react";

interface IPaginationObject {
    current: number;
    itemRender: (pageNumber: number, type: string, originalElement: JSX.Element) => JSX.Element | null;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
}

export const paginationObject = (numItemInPage: number, page: number, setPage: (page: number) => void, total: number): IPaginationObject => {
    return {
        current: page,
        itemRender: (pageNumber, type, originalElement) => {
            if (type === 'page' && pageNumber == page) {
                return <Text typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}
                             className={"page-number-container"}>Page {page}</Text>;
            } else if (type == "prev" || type == "next")
                return originalElement;
        },
        pageSize: numItemInPage,
        total: total,
        onChange: (page) => {
            setPage(page)
            document.documentElement.scrollTop = 0;
        },
    }
}