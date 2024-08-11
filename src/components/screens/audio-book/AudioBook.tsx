import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BkNoPhoto } from "src/assets/images";
import { useGetBooksBySlug } from "src/services";
import { AppBar, Box, Container } from "@mui/material";
import { useResponsive } from "src/hooks";

import { AudioPlayer } from "./player/AudioPlayer";
import { AudioInfo } from "./info/AudioInfo";
import { AudioSelect } from "./select/AudioSelect";

const AudioBook: FC = () => {
  const { slug } = useParams();
  const { data: book } = useGetBooksBySlug(slug);
  const [currentAudio, setCurrentAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(-1);
  const { isMobile: xxl } = useResponsive(1400);
  const { isMobile: llg } = useResponsive(1220);
  const { isMobile: lg } = useResponsive(1000);
  const { isMobile: md } = useResponsive(800);
  const { isMobile: sm } = useResponsive(600);

  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.scrollIntoView();
    }
  }, []);

  const clickAudio = (index: number) => {
    setSelectedAudio(index);
    book?.data && setCurrentAudio(book?.data.audios[index]?.audio_url);
  };

  const onPrev = () => {
    if (!book?.data) return;
    if (selectedAudio < 1 || selectedAudio >= book?.data.audios.length) return;
    if (!book?.data.audios[selectedAudio - 1].audio_url) return;
    setSelectedAudio((index) => index - 1);
    setCurrentAudio("");
    setCurrentAudio(book?.data.audios[selectedAudio - 1]?.audio_url ?? "");
  };

  const onNext = () => {
    if (!book?.data) return;
    if (selectedAudio < 1 || selectedAudio >= book?.data.audios.length) return;
    if (!book?.data.audios[selectedAudio + 1].audio_url) return;
    setSelectedAudio((index: number) => index + 1);
    setCurrentAudio("");
    setCurrentAudio(book?.data?.audios[selectedAudio + 1]?.audio_url ?? "");
  };

  return (
    <AppBar
      ref={bookRef}
      position="relative"
      elevation={0}
      sx={{ bgcolor: "white", minHeight: "100vh", py: "60px" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: lg ? "100%" : xxl ? "40% 60%" : "30% 70%",
            gap: sm ? "20px" : md ? "40px" : "75px",
            mb: "30px",
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
              src={
                book?.data?.image[0] ? book?.data.image[0].image_url : BkNoPhoto
              }
              alt="book? image"
            />
          </Box>
          <AudioInfo data={book?.data} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            flexWrap: llg ? "wrap" : "",
            rowGap: llg ? "30px" : "",
          }}
        >
          {book?.data && (
            <AudioSelect
              clickAudio={clickAudio}
              data={book?.data}
              selectedAudio={selectedAudio}
            />
          )}
          <AudioPlayer
            currentAudio={currentAudio}
            onNext={onNext}
            onPrev={onPrev}
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export { AudioBook };
