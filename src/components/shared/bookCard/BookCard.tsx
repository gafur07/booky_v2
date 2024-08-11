import { Link, useLocation, useNavigate } from "react-router-dom";
import { IBook, IBookItem } from "src/services/index.interface";
import {
  BkCartFilled,
  BkCartOutline,
  BkHeartFilled,
  BkHeartOutline,
  BkNoPhoto,
  BkPlay,
  BkView,
} from "src/assets/images";
import { formatPrice } from "src/utils";
import { useAllStore, useAuthPersistStore } from "src/store";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { useResponsive } from "src/hooks";
import { MouseEvent } from "react";
import { StyledButton } from "src/components/ui";

interface BookCardProps {
  data: IBookItem | IBook;
  pathname?: string;
  showAudio?: boolean;
  showPrice?: boolean;
  showButton?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
  const { pathname } = useLocation();
  const { token } = useAuthPersistStore();
  const { isMobile: md } = useResponsive(820);
  const { isMobile: sm } = useResponsive(60);
  const {
    addToFavorites,
    favorites,
    cart,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useAllStore();

  const navigate = useNavigate();

  const { price, slug, title, image, quantity } = data;

  const isFavorite = favorites.some((item) => item.slug === slug);
  const isCart = cart.some((item) => item.slug === slug);

  const buttonFilter = pathname !== "/my_books" && pathname !== "/favorites";
  const audioFilter = pathname === "/my_books";
  const priceFilter = pathname === "/favorites";

  const onChangeFavorites = () => {
    if (!token) {
      alert("Siz aldin dizimnen otiwinz kerek!");
      return;
    }
    if (isFavorite) {
      removeFromFavorites(data.id);
    } else {
      addToFavorites(data);
    }
  };

  const onChangeCart = () => {
    if (!token) {
      alert("Siz aldin dizimnen otiwinz kerek!");
      return;
    }
    if (isCart) {
      removeFromCart(data.id);
    } else {
      addToCart(data);
    }
  };

  const onNavigateBook = () => {
    if (pathname !== "/my-books") {
      navigate(`/book/${slug}`);
    } else {
      navigate(`/audio-books/${slug}`);
    }
  };

  const clickBtnAudio = () => {
    if (token) {
      navigate(`/audio-books/${slug}`);
    } else {
      navigate(`/book/${slug}`);
    }
  };

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          width: md ? "280px" : "305px",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          background: "white",
          ":hover": {
            transition: "all 0.2s ease-in-out",
            scale: 110,
          },
        }}
        onClick={onNavigateBook}
      >
        <CardMedia
          sx={{
            width: "305px",
            height: "335px",
          }}
          image={image[0] ? image[0].image_url : BkNoPhoto}
        />
        {(price === "0" || Number(price) === 0) && (
          <Typography
            position="absolute"
            top="15px"
            left="0"
            bgcolor="secondary"
            color="white"
            borderRadius="8px"
            className="
						px-4 
						py-1 
						rounded-bl-sm
						"
            variant="h2"
            component="h3"
          >
            Biypul
          </Typography>
        )}
        <Box
          sx={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: "32px",
            padding: "24px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "40px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                columnGap: "8px",
              }}
            >
              <Typography
                whiteSpace="nowrap"
                fontSize={18}
                color={"#202020"}
                fontWeight={600}
              >
                {title}
              </Typography>
            </Box>
            <Button
              color="inherit"
              sx={{
                height: "20px",
                minWidth: "20px",
                bgcolor: "transparent",
                ":hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              {/* <Checkbox 
                checkedIcon={<FavoriteIcon sx={{color: "#FF9E30"}} />}
                icon={<FavoriteBorderIcon sx={{color: "#FF9E30"}} />}
                onChange={(e) => {
                  e.stopPropagation()
                  onChangeFavorites();
                }}
                sx={{
                  transition: "all 0.2s ease-in-out",
                  bgcolor: "transparent",
                  minWidth: 0,
                  p: 0,
                  ":hover": {
                    transform: "scale(1.1)",
                    bgcolor: "transparent",
                  }
                }}                
                value={isFavorite}
              /> */}

              <Box
                component="img"
                onClick={(e) => {
                  e.stopPropagation();
                  onChangeFavorites();
                }}
                src={isFavorite ? BkHeartFilled : BkHeartOutline}
                sx={{
                  height: "20px",
                  transition: "all 0.2s ease-in-out",
                  transform: "scale(1)",
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
                alt="favorite"
              />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            {audioFilter && (
              <Link key={slug} to={`/audio-books/${slug}`}>
                <img
                  style={{
                    width: "30px",
                    fill: "#FF9E30",
                  }}
                  src={BkPlay}
                  alt="play icon"
                />
              </Link>
            )}
            {priceFilter && (
              <Typography fontWeight={600} sx={{ opacity: "0.7" }}>
                {formatPrice(Number(price))} som
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img src={BkView} alt="view" height={16} width={16} />
              <Typography color="#a1a1a1" fontSize="12px" fontWeight="600">
                {quantity}
              </Typography>
            </Box>
            {buttonFilter && (
              <StyledButton
                backgroundcolor="#FF9E30"
                color="white"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  clickBtnAudio();
                }}
              >
                Tıńlaw
              </StyledButton>
            )}
            <Button
              color="inherit"
              sx={{
                height: "20px",
                minWidth: "20px",
                bgcolor: "transparent",
                ":hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <Box
                component="img"
                onClick={(e) => {
                  e.stopPropagation();
                  onChangeCart();
                }}
                src={isCart ? BkCartFilled : BkCartOutline}
                sx={{
                  height: "20px",
                  transition: "all 0.2s ease-in-out",
                  transform: "scale(1)",
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
                alt="cart"
              />
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export { BookCard };
