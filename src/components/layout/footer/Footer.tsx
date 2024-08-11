import { FC } from "react";
import { Link } from "react-router-dom";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  BkClick,
  BkGoogle,
  BkInstagram,
  BkPayme,
  BkTelegram,
  BkUzum,
  BkYoutube,
} from "src/assets/images";

import {
  GOOGLE_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  YOUTUBE_URL,
} from "src/config";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useResponsive } from "src/hooks";

const Footer:FC = () => {
  const { isMobile: md } = useResponsive(820);
  const { isMobile: lg } = useResponsive(1350);
  return (
    <AppBar position="relative" elevation={0} sx={{ py: "40px" }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: "100%",
            color: "white",
            // py: isMobile ? "40px" : "",
            // px: isMobile ? "20px" : ""
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "80px",
              flexWrap: lg ? "wrap" : "",
            }}
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Typography
                component={Link}
                to="/"
                color="white"
                fontSize={md ? 20 : 28}
                fontWeight={700}
              >
                Booky.uz
              </Typography>
              <a href={GOOGLE_URL} target="_blank" className="cursor-pointer">
                <img src={BkGoogle} alt="google play-market" />
              </a>
            </Box>
            <Box display="flex" flexDirection="column" rowGap="12px">
              <Typography variant="inherit">Biz benen baylanısıw</Typography>
              <Typography>
                <a
                  style={{
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "white",
                    fontWeight: 500,
                  }}
                  href="tel:+998933625744"
                >
                  <PhoneEnabledIcon />
                  +998 93 362 57 44
                </a>
              </Typography>
              <a
                style={{
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "white",
                  fontWeight: 500,
                }}
                href="mailto:bookyaudiokitaplar@gmail.com"
              >
                <MailOutlineIcon />
                bookyaudiokitaplar@gmail.com
              </a>
            </Box>
            <Box display="flex" flexDirection="column" rowGap={"12px"}>
              <Typography
                className="leading-[130%] font-medium"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Sociallıq tarmaqlar
              </Typography>
              <Box display="flex" alignItems="center" gap="14px">
                <a href={INSTAGRAM_URL} target="_blank">
                  <img src={BkInstagram} alt="" />
                </a>
                <a href={TELEGRAM_URL} target="_blank">
                  <img src={BkTelegram} alt="telegram" />
                </a>
                <a href={YOUTUBE_URL} target="_blank">
                  <img src={BkYoutube} alt="youtube" />
                </a>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" rowGap={"12px"}>
              <Typography
                component={Link}
                to="/donates"
                color="white"
                fontWeight={500}
              >
                Joybardı qollap-quwatlaw
              </Typography>
              <Typography
                component={Link}
                to="/faq"
                color="white"
                fontWeight={500}
              >
                Kóp beriletuǵın sorawlar
              </Typography>
              <Typography fontSize={12}>© 2024 Booky | Karsoft</Typography>
            </Box>
            <Box display="flex" flexDirection="column" rowGap={"15px"}>
              <Typography>Tólem túrleri</Typography>
              <img
                style={{
                  background: "#e5e5e5",
                  paddingBlock: "12px",
                  paddingInline: "16px",
                  borderRadius: "16px",
                }}
                src={BkUzum}
                alt="image"
              />
              <img
                style={{
                  background: "#e5e5e5",
                  paddingBlock: "12px",
                  paddingInline: "16px",
                  borderRadius: "16px",
                }}
                src={BkClick}
                alt="image"
              />
              <img
                style={{
                  background: "#e5e5e5",
                  paddingBlock: "12px",
                  paddingInline: "16px",
                  borderRadius: "16px",
                }}
                src={BkPayme}
                alt="image"
              />
            </Box>
          </Box>
          <Divider sx={{ bgcolor: "#fff", width: "100%", opacity: 50 }} />
          <Typography textAlign="center" fontSize="14px">
            © 2023-2024 "
            <a style={{ color: "orange" }} href="https://booky.uz">
              Booky.uz
            </a>
            " qaraqalpaq tilindegi audiokitaplar platforması. Barlıq huqıqlar
            qorǵalǵan, nusqa alıp kóshiriw qadaǵan etiledi.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Footer };
