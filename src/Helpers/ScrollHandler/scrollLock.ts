export const formatImageEncoder = (mime: string, data: string): string => {
    // body
    return (`data:${mime};base64,${data}`).toString()
};

export const disableBodyScroll = (from: any = "") => {
    document.body.style.overflow = "hidden";
   //   console.log("hidden");
}

export const enableBodyScroll1 = (from: any = "") => {
    document.body.style.overflow = "auto"; 
    // console.log("auto");
}
