import { FC, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Slider, Typography } from "@mui/material";
import { HiPause } from "react-icons/hi";
import {
  BkCommentAudio,
  BkNextAudio,
  BkPlayAudio,
  BkPrevAudio,
} from "src/assets/images";
import { formatTime } from "src/utils";
import { useResponsive } from "src/hooks";

interface AudioPlayerProps {
  currentAudio: string;
  onPrev: () => void;
  onNext: () => void;
}

const AudioPlayer: FC<AudioPlayerProps> = ({
  currentAudio,
  onNext,
  onPrev,
}) => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const { slug } = useParams();
  const audio = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const { isMobile: md } = useResponsive(820);
  const { isMobile: sm } = useResponsive(600);
  const { isMobile: smm } = useResponsive(500);

  const timeLineChange = (_: Event, value: number | number[]) => {
    if (audio.current) {
      audio.current.currentTime = value as number;
    }
  };
  const volumeChange = (_: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
    if (audio.current) {
      audio.current.volume = (newValue as number) / 100;
    }
  };

  const playAudio = () => {
    if (audio.current && currentAudio) {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audio.current) {
      audio.current.pause();
      setIsPlaying(false);
    }
  };

  const clickBookInfo = () => navigate(`/book/${slug}`);

  const nextAudio = () => onNext();
  const prevAudio = () => onPrev();
  return (
    <Box
      sx={{
        bgcolor: "#d7e7f8",
        py: "30px",
        borderRadius: "16px",
        px: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "166px",
        p: sm ? "10px" : md ? "20px" : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "560px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "36px",
            width: "100%",
          }}
        >
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={clickBookInfo}
            src={BkCommentAudio}
            alt="prev"
          />
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={prevAudio}
            src={BkPrevAudio}
            alt="prev"
          />
          {isPlaying ? (
            <HiPause
              style={{
                cursor: "pointer",
                color: "#2d71ae",
                fontSize: "57.5px",
              }}
              onClick={pauseAudio}
            />
          ) : (
            <img
              style={{
                cursor: "pointer",
              }}
              onClick={playAudio}
              src={BkPlayAudio}
              alt="play"
            />
          )}
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={nextAudio}
            src={BkNextAudio}
            alt="next"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography color="#2d71ae">{formatTime(time)}</Typography>
            <Typography color="#2d71ae">
              {formatTime(audio?.current?.duration || 0)}
            </Typography>
          </Box>
          <Slider
            // tooltip={{ open: false }}
            value={time}
            onChange={timeLineChange}
            max={audio.current?.duration}
          />
        </Box>
      </Box>
      <Slider
        sx={{ height: "70px", width: "3px", ml: smm ? "0" : "10%" }}
        orientation="vertical"
        value={volume}
        onChange={volumeChange}
      />
      <audio
        src={currentAudio}
        ref={audio}
        onTimeUpdate={() => setTime(audio.current?.currentTime || 0)}
        onEnded={pauseAudio}
      />
    </Box>
  );
};

export { AudioPlayer };
