// Interface Service1 Request
export interface IUser {
    id?: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export interface IGetAllUserResponse {
    data: IUser[];
    page: number;
    per_page: number;
    support: {
        url: string;
        text: string;
    };
    total: number;
    total_pages: number;
}
