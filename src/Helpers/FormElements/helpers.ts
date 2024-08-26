import {FormInstance} from "antd";
// TODO can't found convertResponseErrorToFormError
// import {convertResponseErrorToFormError} from "../Mappers/dataMapper";

// set Form Error
export const setFormErrors = (formInstance: FormInstance, error: any) => {
    console.log("error in setForm Errors", error);

    error.code === "ERR_BAD_REQUEST" &&
    error.response.data.meta.message &&
  
    // TODO replace this with  formInstance.setFields([])
    // formInstance.setFields(
        
    //     convertResponseErrorToFormError(error.response.data.meta.message)
    // );
    formInstance.setFields([])
};
  