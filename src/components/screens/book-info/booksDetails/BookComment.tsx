import { IReview } from "src/services/index.interface";
import { FC } from "react";
import { BkUser } from "src/assets/images";
import { useGetBooksBySlug } from "src/services";
import { useParams } from "react-router-dom";
import { Box, Divider, Rating, Typography, Container } from "@mui/material";
import { useResponsive } from "src/hooks";

const BookComment: FC = () => {
  const { slug } = useParams();
  const { data: book } = useGetBooksBySlug(slug);
  const { isMobile: sm } = useResponsive(600);
  const { isMobile: xs } = useResponsive(400);

  const reviews = book?.data ? book?.data.reviews : [];

  return (
    <Container maxWidth="lg" style={{ paddingBlock: "60px" }}>
      <Box sx={{ py: "60px" }}>
        <Typography fontSize={"36px"}>Paydalaniwshilar pikiri</Typography>
        <Divider sx={{ my: "30px", background: "#a1a1a1" }} />
        {reviews.length ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "start",
                rowGap: "24px",
              }}
            >
              {reviews?.map((item: IReview, i: number) => (
                <Box
                  sx={{
                    display: "flex",
                    opacity: 0.75,
                    paddingTop: "30px",
                    gap: "24px",
                    px: sm ? "0" : "10%",
                  }}
                  key={i}
                >
                  <img height={54} src={BkUser} alt="" />
                  <Box
                    sx={{
                      bgcolor: "#a1a1a126",
                      py: "16px",
                      px: "24px",
                      pb: "24px",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        flexDirection: xs ? "column" : "row",
                      }}
                    >
                      <Typography fontWeight={600}>{item.name}</Typography>
                      <Rating readOnly value={item.rating} />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        maxWidth: "800px",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <Typography
            textAlign="center"
            mb="100px"
            color="#202020"
            fontWeight={600}
          >
            Házirshe hesh kim pikir qaldırmadi!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export { BookComment };
