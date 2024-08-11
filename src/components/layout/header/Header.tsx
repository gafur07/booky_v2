import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BkExit } from "src/assets";
import { StyledButton } from "src/components/ui";
import { userItems } from "./headerTop/useHeaderMenu";
import styles from "./header.module.scss";
import {
  AppBar,
  Badge,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Container
} from "@mui/material";
import { useAllStore } from "src/store";

const Header: FC = () => {
  const token = "a";
  const logOut = () => {};
  const navigate = useNavigate();
  const { cart } = useAllStore()
  return (
    <AppBar position="static" sx={{ height: 80 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 80 }}>
          <Typography component={Link} to={'/'} sx={{fontWeight: 700, fontSize: 28}} variant="h5" color="inherit">
            Booky.uz
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <List
            component={"nav"}
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
              },
            }}
          >
            <Box
              component={"ul"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {token ? (
                <>
                  {userItems.map(({ title, url }, index) => (
                    <ListItem key={index} color="inherit">
                      {url === "/cart" ? (
                        <Badge
                          badgeContent={cart.length}
                          color="secondary"
                          sx={{
                            py: "5px",
                            "& .MuiBadge-badge": {
                              fontSize: 12,
                              color: "white",
                            },
                          }}
                        >
                          <Link to={url}>
                            <ListItemText primaryTypographyProps={{fontSize: 14, p: 0}} sx={{ color: "white" }}>
                              {title}
                            </ListItemText>
                          </Link>
                        </Badge>
                      ) : (
                        <Link style={{fontSize: 14}} to={url}>
                          <ListItemText primaryTypographyProps={{ color: "white", fontWeight: 500, fontSize: 14, p: 0}}>
                            {title}
                          </ListItemText>
                        </Link>
                      )}
                    </ListItem>
                  ))}
                  <ListItem>
                    <Button
                      sx={{ color: "white", borderRadius: "16px", gap: "10px" }}
                      onClick={logOut}
                      title="Shigiw"
                      className={styles.exit}
                    >
                      <ListItem
                        sx={{ fontSize: 14, textTransform: "capitalize", p: 0 }}
                      >
                        Shigiw
                      </ListItem>{" "}
                      <img src={BkExit} alt="" />
                    </Button>
                  </ListItem>
                </>
              ) : (
                <>
                  <li>
                    <StyledButton
                      className={styles.loginBtn}
                      onClick={() => navigate("/login")}
                    >
                      Kiriw
                    </StyledButton>
                  </li>
                  <li>
                    <StyledButton
                      className={styles.registerBtn}
                      onClick={() => navigate("/register")}
                    >
                      Dizimnen ótiw
                    </StyledButton>
                  </li>
                </>
              )}
            </Box>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
