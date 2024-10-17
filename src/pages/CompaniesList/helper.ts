export const dataToOptions = (data: any) => {
    return data?.map((item:any) => {
        return {label: item?.name, value: item?.id, count: item?.vacancies_count}
    })
}