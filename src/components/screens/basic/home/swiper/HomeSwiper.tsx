import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BkSwiper } from "src/assets/images";
import { sliders } from "./swiperImg";
import { AppBar, Toolbar, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./homeSwiper.module.scss";

const HomeSwiper: FC = () => {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backgroundImage: `url(${BkSwiper})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <iframe
                src="https://www.youtube.com/embed/UT9ndxZPXxY"
                className={styles.iframeSlide}
              />
            </SwiperSlide>
            {sliders.map(({ img, url }, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <a href={url} target="_blank">
                  <img className={styles.imgSlide} src={img} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { HomeSwiper };
