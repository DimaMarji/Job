import {UseMutationResult, UseQueryResult} from "react-query";
import {IGetAllResponse, IResponse,} from "../../../API/BaseApi/CrudServices/interfaces";

export interface IApiCrudReturn<IGetAllItemData,
    ICreateRequset,
    IUpdateRequest,
    IGetDetailsResponse,
    IGetDetailsParams,
    IDeleteParams> {
    //TODO: Remove & {data?:any}
    getAllEntities: UseQueryResult<IGetAllResponse<IGetAllItemData>>;
    getDetailsEntity: UseMutationResult<IResponse<IGetDetailsResponse>,
        unknown,
        IGetDetailsParams & { id: number | string },
        unknown>;
    createEntity: UseMutationResult<any, unknown, ICreateRequset, unknown>;
    updateEntity: UseMutationResult<IResponse<any>,
        unknown,
        IUpdateRequest & { id: number| string },
        unknown>;
    deleteEntity: UseMutationResult<IResponse<any>,
        unknown,
        IDeleteParams & { id: number| string },
        unknown>;
}
