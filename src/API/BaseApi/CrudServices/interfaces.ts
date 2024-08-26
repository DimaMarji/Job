export interface ICustomEndpoints {
    createEndpoint?: string | undefined;
    updateEndpoint?: string | undefined;
    deleteEndpoint?: string | undefined;
    getEndpoint?: string | undefined;
    getAllEndpoint?: string | undefined;
}

interface IMeta {
    success?: boolean;
    status?: any;
    message?: string;
}

export interface IResponse<IData> {
    data?: IData;
    meta?: IMeta;
}

export interface IGetAllResponse<IData> extends IResponse<any> {
    data: {
        items?: IData[];
        totalCount?: number;
        total?: number;
        total_pages?: number;
    };
}
