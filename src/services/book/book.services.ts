import { api } from "src/api";
import { IReviewChange, IBookItem } from "./book.interface";
import { IResponseSingleData } from "../index.interface";

const axiosGetBooksBySlug = async (
  slug?: string
): Promise<IResponseSingleData<IBookItem>> => {
  const response = await api.get(`/all-books/${slug}`);
  return response.data;
};

const axiosCreateBooksReport = async (form: IReviewChange): Promise<void> => {
  const response = await api.post("/reviews", form);
  return response.data;
};

export { axiosGetBooksBySlug, axiosCreateBooksReport };
