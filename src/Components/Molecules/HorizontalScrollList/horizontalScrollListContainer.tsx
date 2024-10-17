import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../../public/Assets/Icons/right-arrow.svg";
import { IHorizontalScrollList } from "./interface";
import Image from "next/image";

import { useAppMediaQuery } from "../../../Hooks/MediaQuery/use-app-media-query";
import { Button } from "../../Atoms/Button";
import { Grid } from "antd";

const HorizontalScrollList: React.FC<IHorizontalScrollList> = ({
  data,
  listContainer,
  title,
}) => {
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const [isLeftButtonDisabled, setLeftButtonDisabled] =
    useState<boolean>(false);
  const [isRightButtonDisabled, setRightButtonDisabled] =
    useState<boolean>(false);

  const { isMobileOrTablet } = useAppMediaQuery();

  const scrollRef = useRef<HTMLDivElement>(null);
  const screens = Grid.useBreakpoint();

  // This controls the number of columns based on the current screen size
  const getGridColumns = () => {
    return screens.xxl ? 4 : screens.xl ? 3 : screens.lg ? 2 : 1;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth / getGridColumns(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth / getGridColumns(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={"horizontal-list-section"}>
      {title}
      <div className={"arrow-buttons-container"}>
        {
          // showButtons &&
          !isMobileOrTablet ? (
            <Button
              // disabled={isLeftButtonDisabled}
              className={"left-button-trigger"}
              icon={
                <Image
                  alt={"arrow"}
                  style={{ transform: "rotate(180deg)" }}
                  src={Arrow}
                />
              }
              type={"link"}
              onClick={scrollLeft}
            />
          ) : (
            <div />
          )
        }
        {
          // showButtons &&
          !isMobileOrTablet && (
            <Button
              // disabled={isRightButtonDisabled}
              className={"right-button-trigger"}
              type={"link"}
              icon={<Image alt={"arrow"} src={Arrow} />}
              onClick={scrollRight}
            />
          )
        }
      </div>
      <div ref={scrollRef} className={"list-cards-container"}>
        {listContainer}
      </div>
    </div>
  );
};

export default HorizontalScrollList;
