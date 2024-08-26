import ApiService from "../../../BaseApi/api-service";
import config from "../../Config";
import {IGetAllIndexParams} from "../../Interfaces/indexes/get-all-index-params";
import {IIndexDetails} from "../../Interfaces/indexes/index-details-interface";
import {IIndex} from "../../Interfaces/indexes/index-interface";

class Index extends ApiService {
    URL = config.baseUrl + "Index";

    constructor() {
        super({baseURL: config.baseUrl, headers: config.headers});
    }

    /* @tags Index */
    /* @name indexGetAll */

    /* @request GET:/api/services/app/Index/GetAll */
    public getAllIndex = (params: IGetAllIndexParams): Promise<IIndex[]> => {
        return this.get(`${URL}/GetAll`, {
            params,
        });
    };

    /* @tags Index */
    /* @name indexGet */
    /* @request GET:/api/services/app/Index/Get */
    public getIndex = (params: { Id?: number }): Promise<IIndexDetails> => {
        return this.get(`${URL}/Get`, {
            params,
        });
    };
    /* @tags Index */
    /* @name indexCreate */
    /* @request POST:/api/services/app/Index/Create */
    public createIndex = (body: IIndex): Promise<IIndexDetails> => {
        return this.post(`${URL}/Create`, {
            ...body,
        });
    };

    /* @tags Index */
    /* @name indexUpdate */
    /* @request PUT:/api/services/app/Index/Update */
    public updateIndex = (body: IIndex): Promise<IIndex> => {
        return this.put(`${URL}/Update`, {
            ...body,
        });
    };
}

const index = new Index();
export default index;
