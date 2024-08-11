import {
  useGetVotesQuery,
  usePostVotesMutation,
  useRemoveVotesMutation,
} from "src/services/votes/votes.api";
import { BiSolidLike } from "react-icons/bi";
import { FaBookOpen, FaBookReader } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { StyledButton } from "src/components/ui";

const BookVotes = () => {
  const params = useParams();
  const { data } = useGetVotesQuery(params.slug);
  const { mutate: postVote } = usePostVotesMutation();
  const { mutate: removeVote } = useRemoveVotesMutation();

  const handleDelete = (value: number) => {
    removeVote({
      slug: params.slug,
      vote_id: value,
    });
  };

  const handleClickVote = (voteId: number) => {
    switch (voteId) {
      case 1:
        !data?.esittim[1]
          ? postVote({ vote_id: voteId, slug: params.slug! })
          : handleDelete(voteId);
        break;
      case 2:
        !data?.esitip_atirman[1]
          ? postVote({ vote_id: voteId, slug: params.slug! })
          : handleDelete(voteId);
        break;
      case 3:
        !data?.esitejaqpan[1]
          ? postVote({ vote_id: voteId, slug: params.slug! })
          : handleDelete(voteId);
        break;
      case 4:
        !data?.usinis_etemen[1]
          ? postVote({ vote_id: voteId, slug: params.slug! })
          : handleDelete(voteId);
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "16px",
        rowGap: "16px",
      }}
    >
      <Typography fontSize="18px" color="#202020">
        Dawis berin:
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <StyledButton
          onClick={() => handleClickVote(1)}
          color="#2d71ae"
          backgroundcolor="transparent"
          style={{
            border: "1px solid #2d71ae",
          }}
        >
          <FaBookBookmark />
          Esittim
          <span>{data?.esittim[0]}</span>
        </StyledButton>
        <StyledButton
          onClick={() => handleClickVote(2)}
          color="#2d71ae"
          backgroundcolor="transparent"
          style={{
            border: "1px solid #2d71ae",
          }}
        >
          <FaBookReader />
          Esitip atirman
          <span>{data?.esitip_atirman[0]}</span>
        </StyledButton>
        <StyledButton
          onClick={() => handleClickVote(3)}
          color="#2d71ae"
          backgroundcolor="transparent"
          style={{
            border: "1px solid #2d71ae",
          }}
        >
          <FaBookOpen />
          Esitejaqpan
          <span>{data?.esitejaqpan[0]}</span>
        </StyledButton>
        <StyledButton
          onClick={() => handleClickVote(4)}
          color="#2d71ae"
          backgroundcolor="transparent"
          style={{
            border: "1px solid #2d71ae",
          }}
        >
          <BiSolidLike />
          Usinis etemen
          <span>{data?.usinis_etemen[0]}</span>
        </StyledButton>
      </Box>
    </Box>
  );
};

export { BookVotes };
