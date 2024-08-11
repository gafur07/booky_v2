import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { axiosDeleteVotes, axiosGetVotes, axiosPostVotes } from "./votes.services"
import { IError } from "../index.interface"

const useGetVotesQuery = (slug: string | undefined) => {
    const query = useQuery({
        queryFn: () => axiosGetVotes(slug),
        queryKey: ['votes', slug],
        onError: (error: IError) => {
            console.log(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

const usePostVotesMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: axiosPostVotes,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['votes']
            })
            console.log('Dawis berildi!')
        },
        onError: (error: IError) => {
            console.log(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

const useRemoveVotesMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: axiosDeleteVotes,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['votes']
            })
            console.log('Dawis oshirildi!')
        },
        onError: (error: IError) => {
            console.log(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { useGetVotesQuery, usePostVotesMutation, useRemoveVotesMutation }