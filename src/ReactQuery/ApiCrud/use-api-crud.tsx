import { useMutation, useQuery, useQueryClient } from "react-query";
import { CRUDService } from "../../API/BaseApi/CrudServices/crud";
import { ICustomEndpoints, IGetAllResponse, IResponse } from "../../API/BaseApi/CrudServices/interfaces";
import { IApiCrudOperations } from "./interfaces/apiCrudOperationsInterface";
import { IApiCrudOptions } from "./interfaces/apiCrudOptionsInterface";
import { IApiCrudReturn } from "./interfaces/apiCrudReturnInterface";
import { UseHandle } from '../../Hooks/ReactQuery/use-handle-response';

export const useApiCRUD = <
    // get all
    IGetAllParams = {},
    IGetAllItemData = {},
    // create
    ICreateRequset = {},
    // update
    IUpdateRequest = {},
    // get details
    IGetDetailsResponse = {},
    IGetDetailsParams = {},
    // delete
    IDeleteParams = {}>(
        options: IApiCrudOptions<IGetAllParams>,
        customEndpoints?: ICustomEndpoints,
        // TODO: custom operations
        operations?: IApiCrudOperations<IGetAllParams,
            IGetAllItemData,
            ICreateRequset,
            IUpdateRequest,
            IGetDetailsResponse,
            IGetDetailsParams,
            IDeleteParams>): IApiCrudReturn<IGetAllItemData,
        ICreateRequset,
        IUpdateRequest,
        IGetDetailsResponse,
        IGetDetailsParams,
        IDeleteParams> => {

    //Options
    const { serviceName, getAllParams, getAllOptions, createOptions, deleteOptions, getDetailsOptions, updateOptions } = options;

    // Access the client
    const queryClient = useQueryClient();
    const { handleError, handleSuccess } = UseHandle();
    // TODO: custom functions
    //   const { getAllFunc, createFunc, updateFunc, getDetailsFunc, deleteFunc } =
    //     operations;

    // create dynamic services
    const { create, deleteItem, getAll, getDetails, update } = new CRUDService<IGetAllParams,
        IGetAllItemData,
        ICreateRequset,
        IUpdateRequest,
        IGetDetailsResponse,
        IGetDetailsParams,
        IDeleteParams
    >(serviceName, customEndpoints);

    // get All entities
    const getAllEntities = useQuery(
        [`${serviceName}s`, ...Object.values({ getAllParams })],
        () => getAll(getAllParams),
        {
            ...getAllOptions,
            onSuccess: (res: IGetAllResponse<IGetAllItemData>) => {
                getAllOptions?.onSuccess && getAllOptions?.onSuccess(res);
                // console.log(serviceName, "getAll successfully", res);
                //  handleSuccess(res);
            },
            onError: (error: any) => {
                getAllOptions?.onError && getAllOptions?.onError(error);
                handleError(error);
            }
        }
    );

    //get Details Entity
    const getDetailsEntity = useMutation(getDetails, {
        ...getDetailsOptions,
        onError: (error: any) => {
            handleError(error);
        },
    });

    // create entity
    const createEntity = useMutation(create, {
        ...createOptions,
        onSuccess: (res: IResponse<any>) => {
            // Invalidate and refetch
            queryClient.invalidateQueries([`${serviceName}s`]);
            handleSuccess(res);
            // const previousData = queryClient.getQueryData<IGetAllItemData>(
            //   `${serviceName}s`
            // );
            //   console.log("previousData", previousData);
        },
        onError: (error: any) => {
            handleError(error);
        },
    });

    // update Entity
    const updateEntity = useMutation(update, {
        ...updateOptions,
        onSuccess: (res: IResponse<any>) => {
            // Invalidate and refetch
            queryClient.invalidateQueries([`${serviceName}s`]);
            handleSuccess(res);
        },
        onError: (error: any) => {
            handleError(error);
        },
    });

    // delete entity
    const deleteEntity = useMutation(deleteItem, {
        ...deleteOptions,
        onSuccess: (res: IResponse<any>) => {
            // Invalidate and refetch
            queryClient.invalidateQueries([`${serviceName}s`]);
            handleSuccess(res);
        },

        onError: (error: any) => {
            handleError(error);
        },
    });

    // return =>
    return {
        getAllEntities,
        getDetailsEntity,
        createEntity,
        updateEntity,
        deleteEntity,
    };
};

// Ref:
// https://react-query.tanstack.com/reference/useQuery
