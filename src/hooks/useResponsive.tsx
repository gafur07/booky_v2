import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsive = (query: number) => {
    const isMobile = useMediaQuery(`(max-width: ${query}px)`);
    return { isMobile };
};

export { useResponsive };
