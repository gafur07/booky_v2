import { api } from "src/api";
import { IBookSlug, IResponseData } from "src/services/index.interface";

const axiosGetTrendBook = async (): Promise<IResponseData<IBookSlug>> => {
  const response = await api.get("/most-viewed");
  return response.data;
};

export { axiosGetTrendBook };
