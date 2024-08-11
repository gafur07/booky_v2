import { FC } from "react";
import { AppBar, Typography, Container } from "@mui/material";
import { BookCardSkeleton } from "src/components/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useGetTrendBookQuery } from "src/services";
import { IBookSlug } from "src/services/index.interface";
import { BookCard } from "src/components/shared";
import "swiper/css/navigation";

const HomeLastBook: FC = () => {
  const { data: lastBook, isLoading } = useGetTrendBookQuery();

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        // height: "100vh",
        bgcolor: "#d7e7f8",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        py: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          marginBottom={30}
          color="#202020"
          fontSize={32}
          fontWeight={600}
        >
          Sońǵı qosılǵanları
        </Typography>
        <Swiper
          modules={[Navigation]}
          navigation
          style={{ marginTop: "30px" }}
          spaceBetween={30}
          breakpoints={{
            1: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            600: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 3,
            },
            1350: {
              slidesPerView: 4,
            },
          }}
          className="py-1"
        >
          {isLoading
            ? [...Array(4)].map((_, i) => (
                <SwiperSlide key={i}>
                  <BookCardSkeleton />
                </SwiperSlide>
              ))
            : lastBook?.data.map((item: IBookSlug) => (
                <SwiperSlide key={item.slug}>
                  <BookCard key={item.slug} data={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </AppBar>
  );
};

export { HomeLastBook };
