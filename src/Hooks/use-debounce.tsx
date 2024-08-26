import {useMemo} from "react";
import debounce from 'lodash.debounce';

export const useDebounce = (func: any, delay: number) => {
    return useMemo(
        () => debounce(func, delay)
        , [])
}