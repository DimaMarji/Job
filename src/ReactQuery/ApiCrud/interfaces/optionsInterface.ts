import {UseMutationOptions, UseQueryOptions} from "react-query";

export interface IUseQueryOptions
    extends Omit<UseQueryOptions<any, any, any, any>, "queryKey" | "queryFn"> {
}

export interface IUseMutationOptions
    extends Omit<UseMutationOptions<any, any, any, any>, "mutationFn"> {
}
