import { FC } from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { NavCategories } from "./navCategories/NavCategories";
import { Box } from "@mui/material";

const Layout: FC = () => {
  return (
    <Box
      component={"section"}
      sx={{
        maxWidth: "100vw",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <NavCategories />
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export { Layout };
