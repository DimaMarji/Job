export interface IBlogDetails {
    id: string;
    title: string;
    detailed_description: string;
    description: string;
    tag: string;
    visits: number;
    state: "Drafting" | "Publishing" | "Under Review"
    publishing_date: string;
    time_expected_reading: string;
    img: {
        id: string;
        url: string;
    };
    category: {
        label?: string;
        value?: string
    }
}