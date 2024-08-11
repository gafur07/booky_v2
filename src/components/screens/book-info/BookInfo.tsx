import { FC, useEffect, useRef } from "react";
import { BookSlug } from "./booksDetails/BookSlug";
import { BookComment } from "./booksDetails/BookComment";
import { BookReport } from "./booksDetails/BookReport";

const BookInfo: FC = () => {
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.scrollIntoView();
    }
  }, []);
  return (
    <section ref={bookRef} className="min-h-screen flex flex-col">
      <BookSlug />
      <BookComment />
      <BookReport />
    </section>
  );
};

export { BookInfo };
