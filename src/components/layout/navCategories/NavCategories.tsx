import { FC } from "react";
import { NavSearch } from "./NavSearch";
import {
  AppBar,
  ListItemText,
  MenuItem,
  MenuList,
  Skeleton,
  Toolbar,
  Container
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useGetCategoriesQuery } from "src/services/category/category.api";

const donatesItems = [
  {
    name: "Pul jiynalmagan kitaplar",
    slug: "/donates",
  },
  {
    name: "Processtegi kitaplar",
    slug: "/donates-process",
  },
];

const loadingItems = [...Array(5)].map((_, index) => ({
  slug: index,
  name: (
    <Skeleton
      variant="text"
      height={24}
      sx={{ height: "24px !important", width: "100px" }}
      animation="wave"
    />
  ),
}));

const NavCategories: FC = () => {
  const { pathname } = useLocation();
  const { data: categories } = useGetCategoriesQuery();

  const items = pathname.includes("donates" || "donates-process")
    ? donatesItems
    : categories
    ? categories.data.map((item) => ({
        slug: `/categories/${item.slug}`,
        name: item.name,
      }))
    : loadingItems;

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        background: "#D7E7F8",
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "space-between",
            p: 0,
            height: "inherit",
          }}
        >
          <MenuList
            component="nav"
            sx={{
              display: {
                md: "flex",
                sm: "block",
                xs: "block",
                xl: "flex",
                xxl: "block",
              },
              flexDirection: "row",
              padding: 0,
            }}
          >
            {items?.map(({ name, slug }, index) => (
              <MenuItem
                component={Link}
                // button
                to={`${slug}`}
                key={index}
                selected={pathname.slice(1) === slug}
                sx={{
                  pb: "5px",
                  whiteSpace: "nowrap",
                  px: "16px",
                  pt: "16px",
                  borderBottom: "3px solid transparent",
                  "&.Mui-selected": {
                    borderBottom: "3px solid #2d71ae",
                    background: "transparent",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: 550,
                    fontSize: 14,
                    color: "#202020",
                    marginBottom: "5px",
                    textTransform: "revert",
                  }}
                  primary={name}
                />
              </MenuItem>
            ))}
          </MenuList>
          <NavSearch />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { NavCategories };
