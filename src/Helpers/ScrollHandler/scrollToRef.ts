export const handleScrollToRef = (ref: any, percentage: any) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop - percentage
});


export const handleScrollToId = (elementId: string, offset?: number) => {
    const yOffset = offset ?? -200;
    const element = document.getElementById(`${elementId}`);
    const yScroll = element?.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: yScroll, behavior: 'smooth'})
}