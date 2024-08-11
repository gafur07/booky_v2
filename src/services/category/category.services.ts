import { api } from "src/api";
import {
  IResponseData,
  IResponseSingleData,
} from "src/services/index.interface";
import { ICategories } from "./category.interface";

const axiosGetCategory = async (): Promise<IResponseData<ICategories>> => {
  const response = await api.get("/category");
  return response.data;
};

const axiosGetCategoryBySlug = async (
  name?: string
): Promise<IResponseSingleData<ICategories>> => {
  const response = await api.get(`/category/${name}`);
  return response.data;
};

export { axiosGetCategoryBySlug, axiosGetCategory };
