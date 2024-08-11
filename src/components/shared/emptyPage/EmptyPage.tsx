import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "src/components/ui";

const EmptyPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "50vh",
        gap: "16px",
      }}
    >
      <Typography fontWeight={600} fontSize={"24px"}>
        Házirshe bos
      </Typography>
      <StyledButton
        onClick={() => navigate("/")}
        color="white"
        backgroundcolor="#2d71ae"
      >
        Bas betge qaytiw
      </StyledButton>
    </Box>
  );
};

export { EmptyPage };
