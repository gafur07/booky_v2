import { api } from "src/api"
import { IAuthForm, IToken } from "./auth.interface"

export const fetchRegister = async(user: IAuthForm): Promise<IToken> => {
    const response = await api.post('/register', user)
    return response.data
}

export const fetchLogin = async(user: Omit<IAuthForm, "name">): Promise<IToken> => {
    const response = await api.post('/login', user)
    return response.data
}

export const fetchGetMe = async (): Promise<Record<string, unknown>> => {
	const response = await api.get("/getme");
	return response.data;
};
