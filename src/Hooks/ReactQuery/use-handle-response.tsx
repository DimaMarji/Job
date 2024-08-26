import { FormInstance } from "antd";
  import { CustomMessage } from "../../Components/Molecules";
import { errorCodes } from "./constants";
import { useRouter } from "next/router";
import { setFormErrors } from "../../Helpers/FormElements";
import { useCookies } from "react-cookie";
import dynamic from 'next/dynamic';
import { useEffect } from "react";
//import foo from '../foo.js';

// TODO:  for build
// const CustomMessage = dynamic(import('../../Components/Molecules'), { ssr: false }) 


export const UseHandle = () => {
    const { push ,back} = useRouter()
    const [, , removeTokens] = useCookies(["ACCESS_TOKEN", "REFRESH_TOKEN"]);

    const ErrorMessage = (res: any) => {

        CustomMessage(
            {
                message:res?.response?.data?.meta?.message ??   res.message ??    "error",
                type: "error",
                closable: true
            }
        )
    }

    const handleError = (error: any, formInstance?: FormInstance) => {
        formInstance && setFormErrors(formInstance, error)
        
        switch (error?.code ?? error?.status) {
            case errorCodes.networkError:
                push("/offline")
                break;
        }
        console.log("error",error )
        switch (error.response?.status ?? error.status) {
 
           
            // TODO:  
            case 400: {
                ErrorMessage(error)
                break
            }
            case 401: {
                ErrorMessage(error)
                removeTokens('ACCESS_TOKEN');
                removeTokens('REFRESH_TOKEN');
                break
            }
            case 404: {
                 ErrorMessage(error)
        
               useEffect(() => {
                 push("/404")
                 },[])
                break
            }
            case 500: {
                 ErrorMessage(error)
                 useEffect(() => {
                 push("/error")
                 },[])
                 
                //  push("/404")
                // back()
                break
            }

            default:
                ErrorMessage(error)
                break;
        }

    }

    const successMessage = (res: any) => {
        CustomMessage(
            {
                message: res.meta?.message,
                type: "success",
                closable: true
            }
        )
    }

    const handleSuccess = (res: any) => {
        switch (res) {
            
            default:
                successMessage(res)
                break;
        }
    }

    return {
        handleError,
        ErrorMessage,
        handleSuccess,
        successMessage
    };
};





