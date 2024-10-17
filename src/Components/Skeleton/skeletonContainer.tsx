import {Skeleton as AntdSkeleton} from "antd";
import React from "react";
import {ISkeletonProps} from "./interface";

const Skeleton: React.FC<ISkeletonProps> = ({
                                                ...props

                                            }) => {
    return (

        <AntdSkeleton
            {...props}
            className={`skeleton-custom-style ${props?.className ?? ""}`}
        />
    );
};

export default Skeleton;
