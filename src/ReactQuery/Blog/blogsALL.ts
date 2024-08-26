import {useApiCRUD} from "../ApiCrud/use-api-crud";
import {IGetAllBlogParams, IGetAllBlogResponse} from "../../API/TenmilApi/Interfaces/Blog/get-all-blogs";
import {IBlogCategories} from "../../API/TenmilApi/Interfaces/Blog/get-all-blogs-categories";
import {IBlogDetails} from "../../API/TenmilApi/Interfaces/Blog/get-blog-details";
import {ICrudOptions} from "../ApiCrud/interfaces/apiCrudOptionsInterface";

export const useBlog = (options?: ICrudOptions) => {
    return useApiCRUD<
      IGetAllBlogParams,
      IGetAllBlogResponse,
      IBlogDetails,
      IBlogDetails,
      IBlogDetails
    >({
      serviceName: "blogs/website/articles",
        ...options
    });
};

export const useBlogCategories =(options?: ICrudOptions) => {
    return useApiCRUD<{}, IBlogCategories, IBlogCategories, IBlogCategories>(
        {
            serviceName: "blogs/website/categories",
            ...options
        }
    );
};

