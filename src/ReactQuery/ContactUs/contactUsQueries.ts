import {useApiCRUD} from "../ApiCrud/use-api-crud";
import IProjectRequest, {
    ICreateProject,
    IGetAllProjectScope
} from "../../API/TenmilApi/Interfaces/ContactUs/IProjectRequest";


export const useContactUs = () => {

    return useApiCRUD<{}, {}, IProjectRequest>(
        {
            serviceName: "contact-us/",
            getAllOptions: {
                enabled: false,
            },
        },
    );

}

export const useProjectRequest = () => {
    return useApiCRUD<any, any, ICreateProject>(
        {
            serviceName: "tenants/platform/project_request",
            getAllOptions: {
                enabled: false,
            },
        },
    );

}

export const useProjectScopes = () => {
    return useApiCRUD<any, IGetAllProjectScope, {}>(
        {
            serviceName: "platform/project_life/project_scopes",
            getAllParams: {fields: "id,title"},
        },
    );

}