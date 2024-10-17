import React, {useEffect} from 'react';
import {disableBodyScroll} from '../../Helpers/ScrollHandler/scrollLock';
import LoadingProps from "./interface";
import {LoadingIndicator} from "../../Components/Atoms/Loading";

let gIsPartial: boolean = false;

const Loading: React.FC<LoadingProps> = ({isLoading, disableScroll, isPartial}) => {
    useEffect(() => {
        disableBodyScroll();
        if (isPartial === true) gIsPartial = true;
        if (disableScroll === false) {
            // enableBodyScroll();
            gIsPartial = false;
        }
        if (gIsPartial === false && typeof (disableScroll) === "undefined") {
            // enableBodyScroll();
        }
    }, [isLoading])
    return (
        <div className={"loading"}>
            <LoadingIndicator/>
        </div>
    );
};

export default Loading;


