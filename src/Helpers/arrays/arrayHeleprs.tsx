export let checkIfArrayEmpty: (array: Array<any>) => boolean;
checkIfArrayEmpty = (array: Array<any>): boolean => {
    // body
    return !(typeof array !== 'undefined' && array.length > 0);
};


export let searchByKeyword: (array: Array<any> | any, whatToSearch: string, tagToSearchAbout: any) => any;
searchByKeyword = (array: Array<any>, whatToSearch: string, tagToSearchAbout: any): any => {
    // body
    // let justWhatToSearch = ObjectItems.map(item => item[tagToSearchAbout])
    // return [ObjectItems, justWhatToSearch]
    return array.filter(book => book[tagToSearchAbout].toLowerCase().includes(whatToSearch.toLowerCase()))
};


// export let searchByKeywordWithOnlyWhatToSearch: (array: Array<any>, whatToSearch: string, tagToSearchAbout: any) => any;
// searchByKeywordWithOnlyWhatToSearch = (array: Array<any>, whatToSearch: string, tagToSearchAbout: any): any => {
//     // body
//     // let justWhatToSearch = ObjectItems.map(item => item[tagToSearchAbout])
//     // return [ObjectItems, justWhatToSearch]
//     return array.filter(book => book[tagToSearchAbout].toLowerCase().includes(whatToSearch.toLowerCase()))


export let searchByTitleWithOneResult: (array: Array<any>, title: string, tagToSearchAbout: any) => any;
searchByTitleWithOneResult = (array: Array<any>, title: string, tagToSearchAbout: any): any => {
    // body
    return array.find(book => book[tagToSearchAbout].toLowerCase().includes(title.toLowerCase()))
};

export let addValuedKeyToObject: (arrOfObj: any, key: any, value: any) => any;
addValuedKeyToObject = (arrOfObj: any, key: any, value: any): any => {
    arrOfObj.map((name: any) => {
        name[key] = value;
        return name;
    });
};

export const generateEmptyArray = (length: number, fillValue?: string | number | any) => {
    return new Array(length)?.fill(fillValue ?? 0)
}