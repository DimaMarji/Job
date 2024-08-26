export const distanceBetweenPageTopAndElement = (element_id: any) => {
    const element: any = document.getElementById(element_id);
    const navBarElement: any = document.getElementById('zcoderz-nav');
    const navRect = navBarElement?.getBoundingClientRect();
    const rect = element?.getBoundingClientRect(),

        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const temp = (rect?.top + scrollTop) - navRect!?.height
    return temp;
};
 