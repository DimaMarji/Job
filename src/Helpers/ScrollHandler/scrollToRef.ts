export const handleScrollToRef = (ref: any, percentage: any) => window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop - percentage
});