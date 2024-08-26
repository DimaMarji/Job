import {useApiCRUD} from "../ApiCrud/use-api-crud";
import { IGetAllCareer, IPositionDetails} from "../../API/TenmilApi/Interfaces/Career/career-interface";
import {ICrudOptions} from "../ApiCrud/interfaces/apiCrudOptionsInterface";


export const useCareer = (options?: ICrudOptions) => {
    return useApiCRUD<IGetAllCareer,
        IGetAllCareer,
        {},
        {},
        IPositionDetails,
        {},
        {}>(
        {
            serviceName: "careers/open-postions",
            ...options
        }
    );
};


export const useCareerDetails = () => {
    return useApiCRUD<IPositionDetails,
        IPositionDetails,
        IPositionDetails,
        IPositionDetails,
        IPositionDetails,
        { id: string | number },
        IPositionDetails>({
        serviceName: "careers/position-details",
        // getDetailsOptions: {
        // // mutationKey: "careers/position-details",
        // },
        getAllOptions: {
            enabled: false,
        },
    });
};