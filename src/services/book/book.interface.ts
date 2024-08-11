import { ISlug } from "src/services/index.interface";

export interface IBookSlug {
  name: string;
  slug: string;
  books: IBookItem[];
}

export interface IBookItem {
  id: number;
  title: string;
  description: string;
  price: string;
  quantity: string;
  slug: string;
  category: ICategory[];
  genre: IGenre[];
  author: IAuthor[];
  reviews: IReview[];
  audios: IAudio[];
  narrator: INarrator[];
  image: IImage[];
}

export interface IBook {
  id: number;
  quantity: string;
  title: string;
  description: string;
  price: string;
  language: string;
  slug: string;
  author: string;
  image: IImage[];
  reviews: IReview[];
  audio: IAudio[];
}

export interface IReview {
  id: number;
  user_id: string;
  name: string;
  text: string;
  rating: number;
}

export interface IReviewChange {
  slug: string;
  text: string;
  rating: number;
}

export interface IImage {
  id: number;
  imageable_id: string;
  imageable_type: string;
  file_name: string;
  is_main: string;
  image_url: string;
}

export interface ICategory extends ISlug {
  id: number;
}

export interface IAuthor extends ISlug {}

export interface IGenre extends ISlug {}

export interface IAudio {
  id: number;
  title: string;
  is_free: boolean;
  slug: string;
  audio_url: string;
}

export interface INarrator extends ISlug {}
