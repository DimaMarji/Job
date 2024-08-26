import {useApiCRUD} from "../ApiCrud/use-api-crud";
import {oldApiOperationNames} from "../../API/BaseApi/CrudServices/api-operation-names";
import {ICrudOptions} from "../ApiCrud/interfaces/apiCrudOptionsInterface";

interface ICountryCode {
    country_code: string;
}

export const useCountryCode = (options?: ICrudOptions) => {
    return useApiCRUD<ICountryCode,
        ICountryCode,
        ICountryCode,
        ICountryCode,
        ICountryCode,
        ICountryCode>(
        {
            serviceName: "api-gateway/country-code",
            ...options
        },
        oldApiOperationNames
    );
};
