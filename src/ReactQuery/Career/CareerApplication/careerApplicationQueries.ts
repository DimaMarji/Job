import {useApiCRUD} from "../../ApiCrud/use-api-crud";
import IGetAllZeroCaseApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/ZeroCase/IGetAllZeroCaseApplication";
import ICreateZeroCaseApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/ZeroCase/ICreateZeroCaseApplication";
import IUpdateZeroCaseApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/ZeroCase/IUpdateZeroCaseApplication";
import IGetAllCareerApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/NormalCase/IGetAllCarrerApplication";
import ICreateCareerApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/NormalCase/ICreateCareerApplication";
import IUpdateCareerApplication
    from "../../../API/TenmilApi/Interfaces/CarrerApplication/NormalCase/IUpdateCareerApplication";
import {ICrudOptions} from "../../ApiCrud/interfaces/apiCrudOptionsInterface";


export const useCareerApplication = () => {
    return useApiCRUD<{},
        IGetAllCareerApplication,
        ICreateCareerApplication,
        IUpdateCareerApplication,
        IGetAllCareerApplication,
        {},
        {}>(
        {
            serviceName: "careers/emoployee-position",
            getAllOptions: {
                enabled: false,
            },
        },
    );
}

export const useCareerZeroCaseApplication = () => {
    return useApiCRUD<{
        IGetAllParams: {};
        IGetAllItemData: IGetAllZeroCaseApplication;
        // create
        ICreateRequset: ICreateZeroCaseApplication;
        // update
        IUpdateRequest: IUpdateZeroCaseApplication;
        // get details
        IGetDetailsResponse: IGetAllZeroCaseApplication;
        IGetDetailsParams: {};
        // delete
        IDeleteParams: {};
    }>(
        {
            serviceName: "careers/zero-case",
            getAllOptions: {
                enabled: false,
            },
        },
    );
}

export const useUploadFile = (getAllParams?: any, options?: ICrudOptions) => {
    return useApiCRUD<{}, {}, {}>(
        {
            serviceName: "media-handler/upload-file",
            getAllParams: getAllParams,
            getAllOptions: {
                enabled: false,
                ...options?.getAllOptions
            },
            ...options
        }
    );
};