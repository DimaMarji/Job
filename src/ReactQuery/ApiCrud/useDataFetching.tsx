import {useQuery, UseQueryResult} from 'react-query';
import {axiosGet} from "../../API/apiConfig";


export const useDataFetching = (
    serviceName: string,
    params?: any,
    config?: any,
    key?: string | string[] |any
): UseQueryResult<any, any> => {
    return useQuery(
        key ?? `${serviceName},${params}`,
        () => axiosGet(serviceName, { params }),
        config
    );
};
