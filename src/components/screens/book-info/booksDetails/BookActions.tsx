import { BkHeartFilled, BkHeartOutline } from "src/assets/images";
// import { StyledButton, StyledButton } from "src/components/ui";
// import { useAppDispatch, useAppSelector } from "src/hooks";
import { IBookItem } from "src/services/index.interface";
// import {
//   addBuyBook,
//   addCart,
//   addFavorites,
//   clearBuyBook,
//   removeCart,
//   removeFavorites,
// } from "src/store/index.actions";
import { FC, useState } from "react";
import { FaCreditCard, FaHeadphones } from "react-icons/fa6";
import { IoCart, IoCartOutline, IoShareSocialSharp } from "react-icons/io5";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  VKShareButton,
  VKIcon,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useNavigate, useParams } from "react-router-dom";
import { BiCopy } from "react-icons/bi";
import { StyledButton } from "src/components/ui";
import { Box, Button, Toolbar } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useAuthPersistStore } from "src/store";

interface IActionsBook {
  data: IBookItem;
}

const BookActions: FC<IActionsBook> = ({ data }) => {
  const { token } = useAuthPersistStore();
  //   const dispatch = useAppDispatch();
  //   const { favorites } = useAppSelector((store) => store.favorite);
  //   const { basket } = useAppSelector((store) => store.cart);
  //   const isFav = favorites.some((item) => item.slug === data.slug);
  const isFav = "test";
  const isCart = "test";
  //   const isCart = basket.some((item) => item.slug === data.slug);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const handleClickListen = () => {
    if (token) {
      navigate(`/audio-books/${slug}`);
    } else {
      navigate("/login", { replace: true });
    }
  };
  const copyUrl = `https://booky.uz/book/${data.slug}`;

  const [modalNavigator, setModalNavigator] = useState(false);

  function changeCart(data: IBookItem) {
    // dispatch(addCart(data));
  }

  function changeRemoveCart(data: IBookItem) {
    // dispatch(removeCart(data));
  }

  function changeFavorite(data: IBookItem) {
    // dispatch(addFavorites(data));
  }

  function changeFavoriteRemove(data: IBookItem) {
    // dispatch(removeFavorites(data));
  }

  const buyBook = () => {
    if (token) {
      //   dispatch(clearBuyBook());
      //   data && dispatch(addBuyBook(data));
      navigate("/payment");
    } else {
      navigate("/login", { replace: true });
      alert(
        "Kitap satıp alıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı"
      );
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${data.title}`,
      text: `${data.description}`,
      url: `https://booky.uz/book/${data?.slug}`,
    };
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      setModalNavigator(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {token ? (
        <>
          <StyledButton
            onClick={handleClickListen}
            color="#2d71ae"
            backgroundcolor="#d7e7f8"
            style={{
              border: "1px solid #2d71ae",
            }}
          >
            <FaHeadphones size={18} />
            Tıńlap kóriw
          </StyledButton>
          <StyledButton
            onClick={buyBook}
            color="#2d71ae"
            backgroundcolor="#d7e7f8"
            style={{
              border: "1px solid #2d71ae",
            }}
          >
            <FaCreditCard size={18} />
            Satip aliw
          </StyledButton>
          {!isCart ? (
            <StyledButton
              color="white"
              backgroundcolor="#ff9e30"
              style={{
                border: "1px solid #ff9e30",
              }}
              // onClick={() => changeCart(data)}
            >
              <IoCartOutline size={18} />
              Sebetke saliw
            </StyledButton>
          ) : (
            <StyledButton
              color="white"
              backgroundcolor="#ff9e30"
              style={{
                border: "1px solid #ff9e30",
                opacity: 0.8,
              }}
              // onClick={() => changeRemoveCart(data)}
            >
              <IoCart size={18} />
              Sebetten oshiriw
            </StyledButton>
          )}

          <Button
            color="inherit"
            sx={{
              minWidth: "0!important",
              ":hover": { bgcolor: "#d7e7f8" },
            }}
          >
            <img
              onClick={() => {
                isFav ? changeFavoriteRemove(data) : changeFavorite(data);
              }}
              src={isFav ? BkHeartFilled : BkHeartOutline}
              style={{
                height: "34px",
                transition: "all 0.2s ease-in-out",
                transform: hoveredHeart ? "scale(1.1)" : "scale(1)",
              }}
              alt="favorite"
              onMouseEnter={() => setHoveredHeart(true)}
              onMouseLeave={() => setHoveredHeart(false)}
            />
          </Button>
          <StyledButton
            onClick={handleShare}
            color="#2d71ae"
            backgroundcolor="#d7e7f8"
            style={{
              border: "1px solid #2d71ae",
            }}
          >
            <IoShareSocialSharp size="18px" />
            Úlesiw
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton
            onClick={buyBook}
            color="#2d71ae"
            backgroundcolor="#d7e7f8"
            style={{
              border: "1px solid #2d71ae",
            }}
          >
            <FaCreditCard size="18px" />
            Satip aliw
          </StyledButton>
          <button className="flex items-center text-primaryOrange duration-200 hover:opacity-80 font-light leading-[130%]">
            <i className="bx bx-heart text-[34px]"></i>
          </button>
          <StyledButton
            onClick={handleShare}
            color="#2d71ae"
            backgroundcolor="#d7e7f8"
            style={{
              border: "1px solid #2d71ae",
            }}
          >
            <IoShareSocialSharp size="18px" />
            Úlesiw
          </StyledButton>
        </>
      )}
      <Modal
        // centered={true}
        open={true}
        onClose={() => setModalNavigator(false)}
        // title={"Úlesiw"}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "fid-content",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "16px",
          p: 4,
        }}
      >
        <Box>
          <Toolbar
            sx={{
              gap: "16px",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            className="my-4 max-[470px]:justify-start max-[470px]:gap-6 max-[330px]:justify-between"
          >
            <TelegramShareButton url={copyUrl}>
              <TelegramIcon round={true} />
            </TelegramShareButton>
            <WhatsappShareButton url={copyUrl}>
              <WhatsappIcon round={true} />
            </WhatsappShareButton>
            <FacebookShareButton url={copyUrl}>
              <FacebookIcon round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={copyUrl}>
              <XIcon round={true} />
            </TwitterShareButton>
            <VKShareButton url={copyUrl}>
              <VKIcon round={true} />
            </VKShareButton>
            <EmailShareButton url={copyUrl}>
              <EmailIcon round={true} />
            </EmailShareButton>
          </Toolbar>
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              value={copyUrl}
              readOnly
              className="w-full px-4 py-[5px] border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-80"
              onClick={() => {
                navigator.clipboard.writeText(copyUrl);
                alert("Silteme nusqalandi!");
              }}
            >
              <BiCopy size={16} />
            </button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export { BookActions };
