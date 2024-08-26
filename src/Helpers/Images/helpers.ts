export const formatImageEncoder = (mime: string, data: string): string => {
    // body
    return (`data:${mime};base64,${data}`).toString()
};
