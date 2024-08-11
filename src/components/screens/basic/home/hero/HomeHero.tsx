import { FC } from "react";
import { BkMainPage } from "src/assets";
import { StyledButton } from "src/components/ui";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

const HomeHero: FC = () => {
  return (
    <AppBar position="relative" elevation={0} sx={{ bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box display="flex" flexDirection="column" gap="40px">
            <Typography variant="h3" fontWeight="600" fontFamily={"Inter,sans-serif"} fontSize={48} color="#202020">
              «Booky» — qaraqalpaq tilindegi audiokitaplar platformasına xosh
              kelipsiz!
            </Typography>
            <Typography fontSize={14} color={"GrayText"}>
              Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek
              hám qaraqalpaq ádebiyatınıń dúrdana shıǵarmaları jáne qaraqalpaq
              awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio variantların
              jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri,
              sonday-aq qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron
              variantların islep shıǵamız hám saytqa jaylastıramız.
            </Typography>
            <div>
              <StyledButton
                backgroundcolor="#FF9E30"
                color="white"
              >
                Baslaw
              </StyledButton>
            </div>
          </Box>
          <div>
            <img loading="lazy" src={BkMainPage} alt="girl books" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { HomeHero };
