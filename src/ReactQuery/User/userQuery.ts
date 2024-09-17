import {IUserDetails} from "../../API/JobApi/Interfaces/_User/user-details-interface";
import {IGetAllUserParams} from "../../API/JobApi/Interfaces/_User/get-all-user-params-interface";
import {useApiCRUD} from "../ApiCrud/use-api-crud";
import {IUser} from "../../API/JobApi/Interfaces/_User/user-interface";

export const useUser = (getAllParams: IGetAllUserParams) => {
    const userQueries = useApiCRUD<// user interfaces
        IGetAllUserParams,
        IUser,
        IUser,
        IUser,
        IUserDetails>({serviceName: "User", getAllParams});
    return userQueries;
};
