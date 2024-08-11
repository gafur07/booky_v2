import { AppBar } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import {
  BookCard,
  BookList,
  Container,
  EmptyPage,
} from "src/components/shared";
import { BookCardSkeleton, UiTitle } from "src/components/ui";
import { useGetCategoryBySlugQuery } from "src/services";

const Category: FC = () => {
    const { slug } = useParams()
    
  const { data: book, isLoading } = useGetCategoryBySlugQuery(slug);
  return (
    <AppBar
      sx={{ minHeight: "100vh", pb: "30px", background: "white" }}
      position="relative"
      elevation={0}
    >
      <Container>
        <UiTitle>{book?.data.name}</UiTitle>
        <BookList>
          {isLoading ? (
            [...Array(4)].map((_, i) => <BookCardSkeleton key={i} />)
          ) : book && book.data && book.data.books ? (
            book.data.books.map((item) => (
              <BookCard key={item.slug} data={item} showButton /> 
            ))
          ) : (
            <EmptyPage />
          )}
        </BookList>
      </Container>
    </AppBar>
  );
};

export { Category };
