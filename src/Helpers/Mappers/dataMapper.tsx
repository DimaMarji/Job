export const dataMapper = (arrayData: any, whatToSearch: string, tagToSearchAbout: any): string | any => {
    // body
    return arrayData.map((item: any, idx: number) => item[tagToSearchAbout])

};