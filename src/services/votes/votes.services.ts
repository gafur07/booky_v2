import { api } from "src/api";
import { IVotes, IVotesData, IVotesRemove } from "./votes.interface";

const axiosGetVotes = async(slug: string | undefined): Promise<IVotes> => {
    const response = await api.get(`/voting?book=${slug}`)
    return response.data
}

const axiosPostVotes = async(data: IVotesData):Promise<IVotes> => {
    const response = await api.post('/voting', data)
    return response.data
}

const axiosDeleteVotes = async(data: IVotesRemove):Promise<IVotes> => {
    const response = await api.delete(`/voting`, {data})
    return response.data
}

export { axiosGetVotes, axiosPostVotes, axiosDeleteVotes }