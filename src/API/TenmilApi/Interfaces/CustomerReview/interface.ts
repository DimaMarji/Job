import {StaticImageData} from "next/image";

export interface ICustomerReview {
    review: string,
    author: {
        first_name: string
        last_name: string
        avatar:StaticImageData
    }
}