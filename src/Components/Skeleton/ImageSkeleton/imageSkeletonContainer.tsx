import {Skeleton as AntdSkeleton} from "antd";
import React from "react";
import {ISkeletonImageProps} from "./interface";

const ImageSkeleton: React.FC<ISkeletonImageProps> = ({
                                                          ...props

                                                      }) => {
    return (

        <AntdSkeleton.Image
            {...props}
        />
    );
};

export default ImageSkeleton;
