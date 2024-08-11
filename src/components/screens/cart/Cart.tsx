import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSubmitButton, UiTitle } from "src/components/ui";
import { CartCard, Container, EmptyPage } from "src/components/shared";
import { useAllStore } from "src/store";
import { Box, Typography } from "@mui/material";

const Cart: FC = () => {
  const navigate = useNavigate();
  const { cart, booksToBuy, selectedAllBooks } = useAllStore();

  const clickToBuy = () => {
    navigate("/payment");
  };

  const handleSelectAll = () => {
    selectedAllBooks(cart);
  };

  return (
    <Box sx={{ pb: "40px", minHeight: "100vh" }}>
      <Container>
        <UiTitle>Sebet</UiTitle>
        {cart && cart.length === 0 && <EmptyPage />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", 
            mt: "30px",
            gap: "20px",
          }}
          className="max-[1000px]:flex-col max-[1000px]:gap-y-[40px]"
        >
          <Box
            sx={{
              width: "685px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              rowGap: "24px",
            }}
            className="max-[700px]:w-full"
          >
            {cart && cart.length !== 0 && (
              <>
                {cart.map((item, index) => (
                  <CartCard key={index} data={item} />
                ))}
              </>
            )}
          </Box>
          {cart && cart.length !== 0 && (
            <Box
              sx={{
                width: "420px",
                border: "1px solid #83a5c8",
                background: "#f9fcff",
                borderRadius: "16px",
                p: "24px",
                display: "flex",
                flexDirection: "column",
                rowGap: "24px",
              }}
              className="max-[700px]:w-full max-[700px]:text-center"
            >
              <Typography>
                Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı
                belgileń
              </Typography>
              <StyledSubmitButton
                onClick={booksToBuy.length > 0 ? clickToBuy : handleSelectAll}
              >
                {booksToBuy.length > 0 ? "Satip aliw" : "Bárshesin belgilew"}
              </StyledSubmitButton>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export { Cart };
