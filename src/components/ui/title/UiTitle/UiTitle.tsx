import { FC, ReactNode } from "react";
import { Typography } from "@mui/material";
import { useResponsive } from "src/hooks";

const UiTitle: FC<{ children: ReactNode }> = ({ children }) => {
  const { isMobile: md } = useResponsive(820);
  const { isMobile: sm } = useResponsive(600);
  return (
    <Typography
      sx={{
        opacity: "0.7",
        fontWeight: "600",
        color: "#202020",
        fontSize: sm ? "28px" : md ? "34px" : "44px",
        textTransform: "capitalize",
        my: "30px!important",
      }}
    >
      {children}
    </Typography>
  );
};

export { UiTitle };
