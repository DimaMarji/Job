import React, {useEffect, useRef, useState} from "react";
import "./styles.scss";
import Arrow from "../../../public/Assets/Icons/right-arrow.svg"
import {IHorizontalScrollList} from "./interface";
import Image from "next/image";

import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {
    handleClickSliderMoveButtons,
    handleMouseEvent,
    handleScrollLeft, handleScrollRight
} from "../../../Helpers/ScrollHandler/scrollHelpers";
import {Button} from "../../Atoms/Button";


const HorizontalScrollList: React.FC<IHorizontalScrollList> = ({
                                                                   data,
                                                                   listContainer,
                                                                   title
                                                               }) => {

    const containerRef = useRef<any>(null);
    const [showButtons, setShowButtons] = useState<boolean>(false);

    const [isLeftButtonDisabled, setLeftButtonDisabled] = useState<boolean>(false);
    const [isRightButtonDisabled, setRightButtonDisabled] = useState<boolean>(false);

    const {isMobileOrTablet} = useAppMediaQuery();

    //drag
    useEffect(() => {
        handleMouseEvent(".list-cards-container");
        handleClickSliderMoveButtons(
            ".list-cards-container",
            ".horizontal-list-section .right-button-trigger",
            ".horizontal-list-section  .left-button-trigger"
        );
    }, []);

    // handle displaying arrows based on items existence on left and right
    useEffect(() => {
        if (!isMobileOrTablet) {
            const container = containerRef.current;

            const handleInitialScrollCheck = () => {
                const {clientWidth, scrollWidth, scrollLeft} = container;
                // setShowLeftButton(scrollLeft > 0);
                setLeftButtonDisabled(scrollLeft <= 0);
                setShowButtons(scrollWidth > clientWidth);
            };

            const handleScroll = () => {
                const {scrollWidth, clientWidth, scrollLeft} = container;
                setLeftButtonDisabled(scrollLeft <= 0);
                setRightButtonDisabled(scrollWidth <= clientWidth + scrollLeft);
            };

            container?.addEventListener("scroll", handleScroll);
            handleInitialScrollCheck();

            return () => {
                container?.removeEventListener("scroll", handleScroll);
            };
        }
    }, [data, containerRef.current?.scrollWidth]);

    return (
        <div className={"horizontal-list-section"}>
            {title}
            <div className={"arrow-buttons-container"}>
                {showButtons && !isMobileOrTablet ? (
                    <Button
                        disabled={isLeftButtonDisabled}
                        className={"left-button-trigger"}
                        icon={<Image alt={"arrow"} style={{transform: "rotate(180deg)"}} src={Arrow}/>}
                        type={"link"}
                        onClick={() => {
                            handleScrollLeft(containerRef);
                        }}
                    />
                ) : <div/>}
                {showButtons && !isMobileOrTablet && (
                    <Button
                        disabled={isRightButtonDisabled}
                        className={"right-button-trigger"}
                        type={"link"}
                        icon={<Image alt={"arrow"} src={Arrow}/>}
                        onClick={() => handleScrollRight(containerRef)}
                    />
                )}
            </div>
            <div ref={containerRef} className={"list-cards-container"}>
                {listContainer}
            </div>



        </div>
    );
};

export default HorizontalScrollList;