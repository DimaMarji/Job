import React from "react";
import "./styles.scss"
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";

const BrowseByCategorySection: React.FC = () => {
    const {isMobileOrTablet} = useAppMediaQuery()

    const JobsOfTheDayData = [1, 2, 3, 4, 5, 43634, 634, 463, 4, 5, 43634, 634, 463, 34634, 6]
    return <div>
        <div className={"jobs-of-day-title-container"}>
            <Title
                className={"jobs-of-day-title animate__ animate__fadeInUp animated"}
                typographyFontColor={"#05264E"}
                typographyType={{type: "bold-bold-bold", size: "36px-20px-20px"}} level={2}>
                Browse By Category
            </Title>

            <Text
                className={"animate__ animate__fadeInUp animated"}
                typographyFontColor={"#66789C"}
                typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "18px-18px-18px"}}>
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </Text>
        </div>



    </div>

}

export default BrowseByCategorySection