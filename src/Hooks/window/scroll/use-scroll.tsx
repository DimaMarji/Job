import {useCallback, useEffect, useState} from "react";

export const useScroll = () => {
    const [state, setState] = useState<any>({
        lastScrollTop: 0,
        bodyOffset: document.body.getBoundingClientRect(),
        scrollY: document.body.getBoundingClientRect().top,
        scrollX: document.body.getBoundingClientRect().left,
        scrollDirection: "" // down, up
    });

    const handleScrollEvent = useCallback((e: any) => {
        const bodyOffset = document.body.getBoundingClientRect();

        setState(
            // const prevLastScrollTop = prevState.lastScrollTop;

            {
                bodyOffset: bodyOffset,
                scrollY: -bodyOffset.top,
                scrollX: bodyOffset.left,
                // scrollDirection: prevLastScrollTop > -bodyOffset.top ? "down" : "up",
                lastScrollTop: -bodyOffset.top
            }
        );
    }, []);

    useEffect(() => {
        const scrollListener = (e: any) => {
            handleScrollEvent(e);
        };
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, [handleScrollEvent]);

    return {
        scrollY: state.scrollY,
        scrollX: state.scrollX,
        scrollDirection: state.scrollDirection
    };
};

export default useScroll;
