import React from "react";
import Image from "next/image";
import ArrowIcon from "../public/Assets/Icons/left-arrow.svg"
import {Space} from "antd";
import {Text} from "../Components/Atoms/Typography/Text"

// interface IPaginationObject {
//     current: number;
//     itemRender: (pageNumber: number, type: string, originalElement: JSX.Element) => JSX.Element | null;
//     pageSize: number;
//     total: number;
//     onChange: (page: number) => void;
// }


const paginationConfig :any= {
    prev: {
        // text: "Previous",
        iconStyle: { transform: "none" },
    },
    next: {
        // text: "Next",
        iconStyle: { transform: "rotate(180deg)" },
    },
};

export const paginationObject = (numItemInPage: number, page: any, setPage: any, total?: number,isMobileOrTablet?:boolean): any => {
    return {
        current: page,
        itemRender: (_:any, type:any, originalElement:any) => {
            if (paginationConfig[type]) {
                const { text, iconStyle } = paginationConfig[type];
                return (
                    <Space>
                        {type === "prev" && <Image width={18} src={ArrowIcon} alt="arrow icon" />}
                        {!isMobileOrTablet && (
                            <Text
                                typographyType={{
                                    size: "14px-12px-12px",
                                    type: "semi-bold-semi-bold-semi-bold",
                                }}
                            >
                                {text}
                            </Text>
                        )}
                        {type === "next" && (
                            <Image
                                width={18}
                                src={ArrowIcon}
                                style={iconStyle}
                                alt="arrow icon"
                            />
                        )}
                    </Space>
                );
            }

            return originalElement;
        },
        pageSize: numItemInPage,
        total: total ?? 0,
        onChange: (page:any) => {
            setPage(page)
            document.documentElement.scrollTop = 0;
        },
    }
}