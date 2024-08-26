export let filterDataBasedOnValue: (object: any, filterTagName: string, whatToFilter: string, defaultTag?: string) => any;

filterDataBasedOnValue = (object: any, filterTagName: string, whatToFilter: string, defaultTag?: string): any => {
    // body
    if (defaultTag !== undefined && whatToFilter === defaultTag) {
        return object;
    } else {
        return object.filter((item: any | string) => item[filterTagName] === whatToFilter);
    }
};


