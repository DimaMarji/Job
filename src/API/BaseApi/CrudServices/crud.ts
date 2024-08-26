import config from "../../TenmilApi/Config";
import ApiService from "../api-service";
import { ICustomEndpoints, IGetAllResponse, IResponse } from "./interfaces";
import ApiOperationNames from "./api-operation-names";

export class CRUDService<
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
  IDeleteParams = {}
> extends ApiService {
  customEndpoints: ICustomEndpoints | undefined = {
    createEndpoint: undefined,
    deleteEndpoint: undefined,
    getAllEndpoint: undefined,
    getEndpoint: undefined,
    updateEndpoint: undefined,
  };

  constructor(serviceName: string, customEndpoints?: ICustomEndpoints) {
    
    // console.log(
    //   "NEXT_PUBLIC_BASE_API_URL",
    //   process.env.NEXT_PUBLIC_BASE_API_URL
    // );

    super({
      baseURL: `${
        process.env.NEXT_PUBLIC_BASE_API_URL ??
        process.env.REACT_APP_BASE_API_URL
      }${serviceName}`,
      headers: config.headers,
    });
    this.customEndpoints = customEndpoints;
  }

  /* @tags  */
  /* @name GetAll */
  /* @request GET:/baseURL/endpoint/Get?params */
  public getAll = (
    params?: IGetAllParams
  ): Promise<IGetAllResponse<IGetAllItemData>> => {
    return this.get(
      this.customEndpoints?.getAllEndpoint ?? ApiOperationNames.GET,
      {
        params,
      }
    );
  };

  /* @tags  */
  /* @name Get */
  /* @request GET:/baseURL/endpoint/Get/id?params */
  public getDetails = (
    params: IGetDetailsParams & { id: number | string }
  ): Promise<IResponse<IGetDetailsResponse>> => {
    return this.get(
      `${this.customEndpoints?.getEndpoint ?? ApiOperationNames.GET}/${
        params.id
      }`
    );
  };

  /* @tags  */
  /* @name Create */
  /* @request POST:/baseURL/endpoint/Create */
  public create = (body: ICreateRequset): Promise<IResponse<any>> => {
    return this.post(
      this.customEndpoints?.createEndpoint ?? ApiOperationNames.CREATE,
      {
        ...body,
      }
    );
  };

  /* @tags  */
  /* @name Update */
  /* @request PUT:/baseURL/endpoint/Update */
  public update = (
    body: IUpdateRequest & { id: number }
  ): Promise<IResponse<any>> => {
    return this.put(
      `${this.customEndpoints?.updateEndpoint ?? ApiOperationNames.UPDATE}/${
        body.id
      }`,
      {
        ...body,
      }
    );
  };

  /* @tags  */
  /* @name delete */
  /* @request GET:/baseURL/endpoint/delete/id?params */
  public deleteItem = (
    params: IDeleteParams & { id: number }
  ): Promise<IResponse<any>> => {
    return this.delete(
      `${this.customEndpoints?.deleteEndpoint ?? ApiOperationNames.DELETE}/${
        params.id
      }`
    );
  };
}
