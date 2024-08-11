import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchRegister, fetchLogin, fetchGetMe } from "./auth.services";

export const useGetMeQuery = () => {
  const query = useQuery({
    queryFn: fetchGetMe,
    queryKey: ["auth"],
    // onError: (error: IError) => {
    //   message.error(
    //     error.response.data.data.message || error.response.data.data.error
    //   );
    // },
  });

  return query;
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
    },
  });
  return mutation;
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
    },
  });
  return mutation;
};
