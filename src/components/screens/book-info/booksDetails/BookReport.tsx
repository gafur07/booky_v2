import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCreateBooksReportMutation } from "src/services";
import { IReviewChange } from "src/services/index.interface";
import { BkUser } from "src/assets/images";
import { useAuthPersistStore } from "src/store";
import { Box, Rating, Typography, Container } from "@mui/material";
import { useResponsive } from "src/hooks";
import { StyledButton } from "src/components/ui";

const BookReport = () => {
  const { token } = useAuthPersistStore();
  const { isMobile: sm } = useResponsive(600)
  const { isMobile: xs } = useResponsive(400)

  const { mutate: post } = useCreateBooksReportMutation();
  const { slug } = useParams();
  const [rating, setRating] = useState(5);

  const onPost = (_values: IReviewChange) => {
    post({
      ..._values,
      slug: `${slug}`,
      rating: rating,
    });
  };

  return (
    <Box sx={{
      py: "30px",
      bgcolor:"#d7e7f8",
      px: sm ? "5%" : "15%",

    }}
    >
      <Container maxWidth="lg">
        {token ? (
          <form
            // onsubmit={onPost}
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "30px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: xs ? "start" : "center",
                gap: "30px",
                flexDirection: xs ? "column" : "row",
              }}
             >
              <Typography
              fontWeight={600}
              fontSize={18}
                >
                Pikir qaldiriw
              </Typography>
              <Rating defaultValue={rating} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                gap: "24px",
                flexDirection: sm ? "column" : "row"
              }}
             >
              <img height={54} src={BkUser} alt="" />
                <textarea
                  className="w-full rounded-[16px] px-[24px] py-[10px] leading-[150%] max-[500px]:mb-[-24px]"
                  placeholder="Pikir qaldirin'..."
                  rows={1}
                  // autoSize
                  required
                  role="2"
                  minLength={3}
                  cols={6}
                  style={{
                    minHeight: '80px',
                    maxHeight: '200px',
                    width: "100%",
                    fontSize: "16px",
                    paddingInline: "24px",
                    paddingBlock: "10px",
                    marginBottom: sm ? "-24px" : "0",
                    borderRadius: "16px"
                  }}
                />
              <StyledButton backgroundcolor="#2d71ae" color="white" type="submit" 
              >
                Sholiw
              </StyledButton>
            </Box>
          </form>
        ) : (
          <Typography
            color="#202020"
            textAlign="center"
            fontSize={24}
            >
            Pikir qaldırıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı
          </Typography>
        )}
      </Container>
      </Box>
  );
};

export { BookReport };