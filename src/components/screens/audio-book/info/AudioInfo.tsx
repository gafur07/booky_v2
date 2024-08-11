import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useResponsive } from "src/hooks";
import { IBookItem } from "src/services/index.interface";

const colors = [
  "rgba(244, 103, 103, 0.70)",
  "rgba(254, 133, 95, 0.70)",
  "rgba(255, 106, 159, 0.70)",
  "rgba(101, 27, 147, 0.70)",
  "rgba(110, 68, 229, 0.70)",
  "rgba(133, 100, 227, 0.70)",
  "rgba(139, 117, 201, 0.70)",
  "rgba(22, 180, 132, 0.70)",
  "rgba(80, 151, 117, 0.70)",
  "rgba(69, 189, 110, 0.70)",
];

interface AudioBookInfoProps {
  data: IBookItem | undefined;
}

const AudioInfo: FC<AudioBookInfoProps> = ({ data }) => {
  const { isMobile: md } = useResponsive(800);
  return (
    <Box
      key={data?.id}
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
        {data?.title}
      </Typography>
      <Typography textTransform="capitalize" fontSize="18px" color="#202020">
        {data?.author[0]?.name}
      </Typography>
      <Typography color="#202020" sx={{ marginRight: md ? "0" : "20px" }}>
        {data?.description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {data?.genre.map((item, i) => (
          <Typography
            key={i}
            sx={{
              background: colors[i],
              fontSize: "12px",
              borderRadius: "100px",
              py: "5px",
              px: "12px",
              textAlign: "center",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            {item?.name}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textTransform: "capitalize",
        }}
      >
        <Typography color="#202020" fontSize={18}>
          <b>Oqıǵan:</b> {data?.narrator[0].name}
        </Typography>
      </Box>
    </Box>
  );
};

export { AudioInfo };
