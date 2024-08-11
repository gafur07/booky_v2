import axios from "axios";
import { baseURL } from "src/config";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type" : "Application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token') || "").state.token
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export { api }