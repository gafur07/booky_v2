import { IBook } from "src/services/index.interface";

export interface ICategories {
	name: string,
	slug: string
	books: IBook[]
}