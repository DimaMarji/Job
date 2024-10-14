import {Dispatch, ReactNode, SetStateAction} from "react";

export interface ITotpInputProps {
    digitCount: number;
    separator?: string | ReactNode;
    groupItems: number;
    withButton?: boolean
    onSubmit: (totpValue?: string) => void
    errorMessage?: string
    isError?: boolean,
    setIsError?: Dispatch<SetStateAction<boolean>>
    isLoading?: boolean;
    customItemRender?: (totpValue?: string, digitLeft?: number) => ReactNode
    containerClassName?: string
}