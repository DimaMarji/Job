import {IGetAllResponse} from "../../../API/BaseApi/CrudServices/interfaces";

export interface IApiCrudOperations<IGetAllParams,
    IGetAllItemData,
    IGetDetailsParams,
    IGetDetailsResponse,
    ICreateRequset,
    IUpdateRequest,
    IDeleteParams> {
    getAllFunc: (params: IGetAllParams) => Promise<IGetAllResponse<IGetAllItemData>>;
    getDetailsFunc: (data: IGetDetailsParams) => Promise<IGetDetailsResponse>;
    createFunc: (data: ICreateRequset) => Promise<any>;
    updateFunc: (data: IUpdateRequest) => Promise<any>;
    deleteFunc: (data: IDeleteParams) => Promise<any>;
}
