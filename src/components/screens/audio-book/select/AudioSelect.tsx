import { FC, useState } from "react";
import { TransformNumber } from "src/utils";
import { BkLock, BkUnlock, BkWave } from "src/assets/images";
import { useNavigate } from "react-router-dom";
import { IBookItem } from "src/services/index.interface";
import { useAuthPersistStore } from "src/store";
import { Box, Button, Popover, Typography } from "@mui/material";
import { useResponsive } from "src/hooks";
import { styled } from "@mui/system";

interface AudioSelectProps {
  data: IBookItem | undefined;
  clickAudio: (index: number) => void;
  selectedAudio: number;
}

const CustomPopover = styled(Popover)(() => ({
  ".MuiPaper-root": {
    borderRadius: "10px",
    padding: "5px 10px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
}));

const AudioSelect: FC<AudioSelectProps> = ({
  data,
  clickAudio,
  selectedAudio,
}) => {
  const { token } = useAuthPersistStore();
  const navigate = useNavigate();
  const { isMobile: sm } = useResponsive(600);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const unlockBtn = () => {
    if (token) {
      //   dispatch(clearBuyBook());
      //   data && dispatch(addBuyBook(data));
      navigate("/payment");
    } else {
      navigate("/login", { replace: true });
    }
  };

  const content = (
    <div className="flex items-center gap-[10px]">
      <div>Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń.</div>
      <button className="flex items-center gap-[5px]" onClick={unlockBtn}>
        <img src={BkUnlock} alt="unlock" /> Satıp alıw
      </button>
    </div>
  );

  return (
    <Box
      sx={{
        width: sm ? "100%" : "360px",
        bgcolor: "#d7e7f8",
        display: "flex",
        flexDirection: "column",
        rowGap: "32px",
        borderRadius: "16px",
        py: "16px",
        pr: "10px",
        pl: "34px",
      }}
    >
      <Typography color="#a1a1a1" fontSize={20} fontWeight={500}>
        Sóz bası
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "250px",
          rowGap: "32px",
          borderRadius: "16px",
          pr: "15px",
          overflow: "auto",
        }}
      >
        {data?.audios?.map((item, index) => {
          return item.audio_url && item.audio_url.includes("http") ? (
            <Button
              color="inherit"
              sx={{
                bgcolor: "transparent",
                ":hover": {
                  bgcolor: "transparent",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => clickAudio(index)}
              key={index}
            >
              <Typography
                textTransform={"lowercase"}
                display="flex"
                gap="5px"
                color="#202020"
              >
                <Typography textTransform="uppercase">
                  {TransformNumber(index + 1)}
                </Typography>
                bólim
              </Typography>
              {index === selectedAudio && <img src={BkWave} alt="wave" />}
            </Button>
          ) : (
            <>
              <Button
                aria-describedby={id}
                onClick={handleClick}
                color="inherit"
                sx={{
                  bgcolor: "transparent",
                  ":hover": {
                    bgcolor: "transparent",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: 0.6,
                  cursor: "pointer",
                }}
                // disabled
                key={index}
              >
                <Typography
                  textTransform={"lowercase"}
                  display="flex"
                  gap="5px"
                  color="#202020"
                >
                  <Typography textTransform="uppercase">
                    {TransformNumber(index + 1)}
                  </Typography>
                  bólim
                </Typography>
                <img src={BkLock} alt="" />
              </Button>
              <CustomPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  top: "-35px",
                }}
                // transformOrigin={{
                //   vertical: "top",
                //   horizontal: "left",
                // }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div>Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń.</div>
                  <Button
                    color="inherit"
                    sx={{
                      bgcolor: "transparent",
                      ":hover": {
                        bgcolor: "transparent",
                      },
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      textTransform: "revert",
                      minWidth: "0",
                    }}
                    onClick={unlockBtn}
                  >
                    <img src={BkUnlock} alt="unlock" />
                    Satıp alıw
                  </Button>
                </Box>
              </CustomPopover>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export { AudioSelect };
