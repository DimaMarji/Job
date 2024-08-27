export const handleScrollLeft = (containerRef: any) => {
    const container = containerRef.current;
    if (container) {
        container.scrollBy({
            left: -container.clientWidth,
            behavior: "smooth",
        });
    }
};

export const handleScrollRight = (containerRef: any) => {
    const container = containerRef.current;
    if (container) {
        container.scrollBy({
            left: container.clientWidth,
            behavior: "smooth",
        });
    }
};

export const handleClickSliderMoveButtons = (container: string, rightButtonScroll: string, leftButtonScroll: string) => {

    const containerElement = document.querySelector(container) as any;
    const rightButtonScrollElement = document.querySelector(rightButtonScroll) as any;
    const leftButtonScrollElement = document.querySelector(leftButtonScroll) as any;
    rightButtonScrollElement?.addEventListener('click', (e: any) => {
        if (containerElement)
            containerElement.scrollLeft = containerElement.scrollLeft + 100;
    })
    leftButtonScrollElement?.addEventListener('click', (e: any) => {
        if (containerElement)
            containerElement.scrollLeft = containerElement.scrollLeft - 100;
    })
}

export const handleMouseEvent = (containerClassName: string) => {

    const containerElement = document.querySelector(containerClassName) as any;
    let isDown = false;
    let startX: any;
    let scrollLeft: any;
    containerElement?.addEventListener('mousedown', (e: any) => {
        isDown = true;
        containerElement.classList.add('active');
        startX = e.pageX - containerElement.offsetLeft;
        scrollLeft = containerElement.scrollLeft;
    });
    containerElement?.addEventListener('mouseleave', () => {
        isDown = false;
        containerElement.classList.remove('active');
    });
    containerElement?.addEventListener('mouseup', () => {
        isDown = false;
        containerElement.classList.remove('active');
    });
    containerElement?.addEventListener('mousemove', (e: any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - containerElement.offsetLeft;
        const walk = (x - startX); //scroll-fast
        containerElement.scrollLeft = scrollLeft - walk;
    });
}