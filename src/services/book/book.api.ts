import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosGetBooksBySlug, axiosCreateBooksReport } from "./book.services";
// import { IError } from "src/services/index.interface";

const useGetBooksBySlug = (slug?: string) => {
  const query = useQuery({
    queryFn: () => axiosGetBooksBySlug(slug),
    queryKey: ["book-slug", slug],
    enabled: !!slug,
    // onError: (error: IError) => {
    // 	message.error(
    // 		error.response.data.data.error || error.response.data.data.message
    // 	);
    // },
  });
  return query;
};

const useCreateBooksReportMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateBooksReport,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["book-slug"],
      });
      // message.success("Pikir bildirildi!");
    },
    // onError: (error: IError) => {
    // 	message.error(
    // 		error.response.data.data.error || error.response.data.data.message
    // 	);
    // },
  });
  return mutation;
};

export { useGetBooksBySlug, useCreateBooksReportMutation };
