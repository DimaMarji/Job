export default interface IProjectRequest {
    full_name: string
    email: string
    phone_number: string
    customer_message: string
    recaptcha_token: string
}

export interface IGetAllProjectScope {
    id: string;
    title: string;
}

export interface ICreateProject {
    name: string;
    email: string;
    description: string;
    budget: string;
    project_scopes: string[];
    status: any;
}