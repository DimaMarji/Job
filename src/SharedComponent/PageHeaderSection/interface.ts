import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface IPageHeaderSection {
    image: string | StaticImageData;
    title:string
    subTitle?:string
}