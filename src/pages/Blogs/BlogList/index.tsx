import React, {useEffect, useState} from 'react';
import './style.scss'
import {List} from 'antd';
import {IBlogListProps} from './interface';
import BlogCard from './BlogCard';
import useUrl from "../../../Hooks/window/Url";
import {checkIfArrayEmpty} from "../../../Helpers";
import {BlogSearchNotFoundContainer} from "../BlogSearchNotFound";
import BlogCardSkeleton from "./BlogCardSkeleton/blogCardSkeletonContainer";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {paginationObject} from "../../../Constants/paginationObject";
import {generateEmptyArray} from "../../../Helpers/arrays/arrayHeleprs";
import {noBlogsInCategory} from "../BlogSearchNotFound/emptyCategoryContainer";
import {useDataFetching} from "../../../ReactQuery/ApiCrud/useDataFetching";


const BlogListContainer: React.FC<IBlogListProps> = ({
                                                         numOfItems,
                                                         blogsData
                                                     }) => {
    const {getParam} = useUrl()

    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(3);
    const [totalPages, setTotalPages] = useState<number>(5);

    const tagSelected = getParam("filter")
    const searchKeyword = getParam("search")
    const {isMobileOrTablet} = useAppMediaQuery()

    const numOfItemsInPage = numOfItems ? 3 : isMobileOrTablet ? 4 : 6

    
    const {data, error, isLoading, isError} = useDataFetching(
        "home_page/blogs",          // Key and params combined as query key
    );

    let dateFiltered: any | undefined = (data as any)?.data;
   

    useEffect(() => {
        setPage(1)
    }, [tagSelected])

    //
    // useEffect(() => {
    //     setPage(page)
    //     setTotal(getAllEntities?.data?.data?.total)
    //     setTotalPages(getAllEntities?.data?.data?.total_pages)
    //    }, [getAllEntities.isSuccess])

    const emptyArray = generateEmptyArray(numOfItemsInPage)

    return (
        <>
            {/*{(checkIfArrayEmpty(dateFiltered) && !!searchKeyword && !isLoading)*/}
            {/*    ? <BlogSearchNotFoundContainer/>*/}
            {/*    :*/}
                <List
                    className={"blog-list"}
                    grid={{
                        gutter: 40,
                        xxl: 3,
                        xl: 3,
                        lg: 2,
                        md: 1,
                        sm: 1,
                        xs: 1
                    }}
                    size="default"
                    locale={{emptyText: noBlogsInCategory(tagSelected)}}
                    dataSource={isLoading ? emptyArray : dateFiltered}
                    renderItem={(item: any) => (
                        <List.Item> {isLoading ? <BlogCardSkeleton/>
                            : <BlogCard item={item}/>}</List.Item>
                    )}
                    pagination={!!numOfItems ? undefined : totalPages && (totalPages > 1) && !blogsData ? paginationObject(numOfItemsInPage, page, setPage, total) : undefined}
                >
                </List>
            {/*}*/}
        </>


    );
};
export default BlogListContainer;