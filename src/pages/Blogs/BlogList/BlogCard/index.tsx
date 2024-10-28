import React from 'react';
import {BlogCardProps} from "./interface";
import {replaceSpacesWithDashes} from "../../../../Helpers";

import {useRouter} from 'next/router';
import Image from "next/image"
import moment from "moment";
import {Card, Space, Tag} from "antd";
import {Title} from "../../../../Components/Atoms/Typography/Title";
import {Paragraph} from '../../../../Components/Atoms/Typography/Paragraph';
import {Text} from '../../../../Components/Atoms/Typography/Text';
import {Avatar} from "../../../../Components/Atoms/Avatar";
import {getUserAvatarColor} from "../../../../Helpers/helpers";
import FallbackImage from "../../../../public/Assets/Images/General/fallback-image.svg";

const BlogCard: React.FC<BlogCardProps> = ({
                                               item,
                                               ...props
                                           }) => {
    const router = useRouter()

    const routeChange = (blogTitle: string) => {
        router.push(`/blogs/${replaceSpacesWithDashes(blogTitle)}`)
    }

    console.log(item?.image)
    return (
        <Card
            {...props}
            hoverable={false}
            className={"blog-card hover-up animate__ animate__fadeIn animated"}
            key={item?.id}
            onClick={() => routeChange(item ? item.title : "")}
        >
            <div>
                <div className='blog-card-image'>
                    <Image
                        alt={item?.title}
                        src={item?.image ?? FallbackImage}
                        width={200}
                        height={150}
                        key={item?.id}
                    />
                </div>
                <Tag>
                    {!!item?.category_name ? item?.category_name : "General"}
                </Tag>

                <Title
                    typographyType={{size: "18px-14px-14px", type: "semi-bold-semi-bold-semi-bold"}}
                    ellipsis
                    className={"blog-title"}>
                    {item?.title}
                </Title>
                <Paragraph className={"blog-card-description"}
                           ellipsis={{rows: 3}}
                           typographyType={{size: "16px-14px-14px", type: "regular-regular-regular"}}
                >
                    {item?.short_text}
                </Paragraph>


                <div className={"blog-card-category"}>
                    <Space className={"user-details-container"}>
                        <Avatar color={getUserAvatarColor(item.user_id)}
                                withPreview={true}
                                userFullName={item?.user_name}
                                src={item?.user_image}
                        />
                        <Space direction={"vertical"}>
                            <Text typographyFontColor={"#f8c80d"}
                                  typographyType={{size: "14px-14px-14px", type: "semi-bold-semi-bold-semi-bold"}}>
                                {item?.user_name}
                            </Text>
                            <Text typographyType={{size: "12px-12px-12px", type: "regular-regular-regular"}}>
                                {moment(item?.created_at).format("MMMM DD, YYYY")}
                            </Text>
                        </Space>
                    </Space>
                    <Text typographyType={{size: "12px-12px-12px", type: "regular-regular-regular"}}>
                        {item?.created_at}
                    </Text>
                </div>
            </div>


        </Card>
    );
};

export default BlogCard;