import ApiService from "../../../BaseApi/api-service";
import config from "../../Config";
import {IGetAllUserParams} from "../../Interfaces/_User/get-all-user-params-interface";
import {IUserDetails} from "../../Interfaces/_User/user-details-interface";
import {IGetAllUserResponse, IUser,} from "../../Interfaces/_User/user-interface";

class User extends ApiService {
    serviceName = "users";

    constructor() {
        super({baseURL: "https://reqres.in/api/", headers: config.headers});
    }

    /* @tags User */
    /* @name UserGetAll */

    /* @request GET:/reqres.in/User/GetAll */
    public getAllUsers = (
        params: IGetAllUserParams
    ): Promise<IGetAllUserResponse> => {
        return this.get(this.serviceName, {
            params,
        });
    };

    /* @tags User */
    /* @name UserGet */
    /* @request GET:/reqres.in/User/Get */
    public getUser = (id?: number): Promise<IUserDetails> => {
        return this.get(`${this.serviceName}/${id}`);
    };

    /* @tags User */
    /* @name UserCreate */
    /* @request POST:/reqres.in/User/Create */
    public createUser = (body: IUser): Promise<IUserDetails> => {
        return this.post(`${this.serviceName}`, {
            ...body,
        });
    };

    /* @tags User */
    /* @name UserUpdate */
    /* @request PUT:/reqres.in/User/Update */
    public updateUser = (body: IUser): Promise<IUser> => {
        return this.put(`${this.serviceName}/${body.id}`, {
            ...body,
        });
    };

    /* @tags User */
    /* @name UserGet */
    /* @request GET:/reqres.in/User/Get */
    public deleteUser = (params: { Id: number }): Promise<any> => {
        return this.delete(`${this.serviceName}`, {
            params,
        });
    };
}

const user = new User();
export default user;
