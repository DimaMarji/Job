import React from 'react';
import {LoadingProps} from "./interface";
import "./style.scss";
import Image from "next/image";
import ind3 from "../../../public/Assets/Icons/Loading/Indicitor-Position3.svg";
import ind1 from "../../../public/Assets/Icons/Loading/Indicitor-Position1.svg";
import ind2 from "../../../public/Assets/Icons/Loading/Indicitor-Position2.svg";


const LoadingIndicator: React.FC<LoadingProps> = () => {
    return (
        <div className={"loading-indicator"}>
            <Image src={ind3} alt={"loading-indicator"}/>
            <Image src={ind1} alt={"loading-indicator"}/>
            <Image src={ind2} alt={"loading-indicator"}/>
        </div>
    );
};
export default LoadingIndicator;