import { FC } from "react";
import { BookVotes } from "./BookVotes";
import { BkNoPhoto } from "src/assets/images";
import { useParams } from "react-router-dom";
import { useGetBooksBySlug } from "src/services";
import { formatPrice } from "src/utils";
import { useAuthPersistStore } from "src/store";
import { BookActions } from "./BookActions";
import { AppBar, Box, Typography } from "@mui/material";
import { useResponsive } from "src/hooks";
import { Container } from "src/components/shared";

const BookSlug: FC = () => {
  const { token } = useAuthPersistStore();
  const { isMobile: xxl } = useResponsive(1400);
  const { isMobile: lg } = useResponsive(1000);
  const { isMobile: md } = useResponsive(800);
  const { isMobile: sm } = useResponsive(600);
  const { slug } = useParams();
  const { data: book } = useGetBooksBySlug(slug);

  const author = book?.data ? book?.data.author : [];

  const category = book?.data ? book?.data.category : [];

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{ bgcolor: "white", minHeight: "100vh", py: "60px" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: lg ? "100%" : xxl ? "40% 60%" : "30% 70%",
            // gridTemplateColumns: {
            //   sm: "100%",
            //   md: "40% 60%",
            //   lg: "30% 70%", 
            // },
            gap: sm ? "20px" : md ? "40px" : "75px",
            // gap: {
            //   xs: 20,
            //   sm: 40,
            //   md: 75
            // },
          }}
        >
          <Box sx={{ display: "grid", placeItems: "center", width: "100%" }}>
            <img
              style={{
                maxWidth: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                width: lg ? "80%" : "100%",
                margin: md ? "0 auto" : "",
              }}
              src={book?.data?.image[0] ? book?.data.image[0].image_url : BkNoPhoto}
              alt="book image"
            />
          </Box>
          {book?.data && (
            <Box
              key={book?.data.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
                width: "100%",
              }}
            >
              <Typography
                textTransform={"revert"}
                fontWeight={600}
                fontSize={"48px"}
                color="#202020"
                pr={"30px"}
              >
                {book?.data.title}
              </Typography>
              <Typography
                textTransform="revert"
                fontSize="18px"
                color="#202020"
              >
                {author[0].name}
              </Typography>
              <Typography
                color="#202020"
                sx={{ marginRight: md ? "0" : "20px" }}
              >
                {book?.data.description}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {category.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      background: "#651b93b3",
                      fontSize: "12px",
                      borderRadius: "100px",
                      py: "5px",
                      px: "12px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {item?.name}
                  </Typography>
                ))}
              </Box>
              <Typography fontWeight={600} fontSize={36} color="#202020">
                {formatPrice(Number(book?.data.price))} som
              </Typography>
              <BookActions data={book?.data} />
              {token ? <BookVotes /> : ""}
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export { BookSlug };
