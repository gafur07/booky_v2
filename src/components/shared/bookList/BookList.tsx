import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface BookListProps {
  children?: ReactNode;
}

const BookList: FC<BookListProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        rowGap: "30px",
        flexWrap: "wrap",
        alignItems: "flex-start"
      }}
    >
      {children}
    </Box>
  );
};

export { BookList };
