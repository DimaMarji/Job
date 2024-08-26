import {ReactNode} from "react";
import {IPositionDetails} from "../../API/TenmilApi/Interfaces/Career/career-interface";

export interface ICareerJobOverviewCardProps {
    data?: IPositionDetails
    applyButton?: ReactNode
    type:"share"|"jobInfo"
}
