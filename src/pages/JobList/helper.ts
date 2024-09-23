export const dataToOptions = (data: any) => {
    return data?.map((item) => {
        return {label: item?.name, value: item?.id, count: item?.vacancies_count}
    })
}