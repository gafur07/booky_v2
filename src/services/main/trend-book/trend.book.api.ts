import { useQuery } from "@tanstack/react-query";
import { axiosGetTrendBook } from "./trend.book.services";
// import { IError } from "src/services/index.interface";

const useGetTrendBookQuery = () => {
  const query = useQuery({
    queryFn: axiosGetTrendBook,
    queryKey: ["trendBook"],
    // onError: (error: IError) => {
    // 	message.error(
    // 		error.response.data.data.message || error.response.data.data.error
    // 	);
    // },
  });
  return query;
};

export { useGetTrendBookQuery };
