import {MutableRefObject, useEffect, useState} from "react";

const getOffset = (element: any) => {
    const navBarElement: any = document.getElementById('zcoderz-nav');
    const navRect = navBarElement?.getBoundingClientRect();
    const rect = element?.getBoundingClientRect(),
        scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
    return (rect!.top + scrollTop) - navRect!.height;
};
export const useInView = <T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {


        const observer = new IntersectionObserver(
            ([entry]) => {

                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref?.current) {

            observer.observe(ref?.current);
        }
        return () => {
            if (ref?.current !== null) {
                observer.unobserve(ref?.current);
            }
        };

    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}