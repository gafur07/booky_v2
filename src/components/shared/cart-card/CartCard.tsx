import { BkNoPhoto } from "src/assets/images";
import { IBookItem } from "src/services/index.interface";
import { formatPrice } from "src/utils";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
import { HiTrash } from "react-icons/hi";
import { useAllStore } from "src/store";

interface CartCardProps {
  data: IBookItem;
}

const CartCard: FC<CartCardProps> = ({ data }) => {
  const { booksToBuy, removeFromCart, addBooksToBuy, removeFromBuyBook } =
    useAllStore();
  const isBuyBook = booksToBuy.some((el) => el.id === data.id);
  const { image, title, price } = data;

  const changeRemoveCard = () => {
    removeFromCart(data.id);
  };

  const handleChecked = () => {
    if (isBuyBook) {
      removeFromBuyBook(data.id);
    } else {
      addBooksToBuy(data);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
		justifyContent: "space-between",
        gap: "30px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Box
            component="img"
            sx={{
              borderRadius: "16px",
              width: "102px",
              height: "102px",
              objectFit: "cover",
            }}
            src={image[0] ? image[0]?.image_url : BkNoPhoto}
            alt="book image"
          />
          <Typography sx={{ pr: "20px" }}>{title}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
          }}
        >
          <Typography color="#202020bf" fontWeight="600" whiteSpace="nowrap">
            {formatPrice(Number(price))} som
          </Typography>
          <Button
            onClick={changeRemoveCard}
            sx={{
              background: "transparent",
              minWidth: 0,
              color: "#8d8e8f",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "6px",
              fontWeight: "400",
              textTransform: "capitalize",
              ":hover": {
                background: "transparent",
              },
            }}
          >
            <HiTrash />
            Oshiriw
          </Button>
        </Box>
      </Box>
      <Checkbox
        className="bg-transparent"
        checked={isBuyBook}
        onChange={handleChecked}
      />
    </Box>
  );
};

export { CartCard };
