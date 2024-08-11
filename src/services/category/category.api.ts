import { useQuery } from "@tanstack/react-query";
import { axiosGetCategoryBySlug, axiosGetCategory } from "./category.services";
// import { IError } from "src/services/index.interface";

const useGetCategoriesQuery = () =>
	useQuery({
		queryFn: axiosGetCategory,
		queryKey: ["categories"],
		// onError: (error: IError) => {
		// 	alert(error.response.data.message);
		// },
	});

const useGetCategoryBySlugQuery = (name?: string) => {
	const query = useQuery({
		queryFn: () => axiosGetCategoryBySlug(name),
		queryKey: ["category", name],
		enabled: !!name,
		// onError: (error: IError) => {
		// 	alert(error.response.data.message);
		// },
	});
	return query;
};

export { useGetCategoriesQuery, useGetCategoryBySlugQuery };
