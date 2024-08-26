import {IBlogDetails} from "./get-blog-details";

export interface IImageAllBlog {
    mime: string;
    data: string;
}

export interface IBlogs {
    items: IBlogDetails[];
    total: number;
    total_pages: number
}


export interface IGetAllBlogResponse {
    data: IBlogs;
    meta: any;
}

export interface IGetAllBlogParams {
    category?: string;
    id?: string;
}