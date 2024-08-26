import {IUseMutationOptions, IUseQueryOptions} from "./optionsInterface";

export interface IApiCrudOptions<IGetAllParams> {
    serviceName: string;
    getAllParams?: IGetAllParams;
    getAllOptions?: IUseQueryOptions;
    getDetailsOptions?: IUseMutationOptions;
    createOptions?: IUseMutationOptions;
    updateOptions?: IUseMutationOptions;
    deleteOptions?: IUseMutationOptions;
}

export interface ICrudOptions
    extends Omit<IApiCrudOptions<any>, "serviceName"> {
}
