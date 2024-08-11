import { IAudio, IReview, IImage } from "src/services/index.interface";

export interface ITrendBook {
  id: number;
  quantity: string;
  title: string;
  description: string;
  language: string;
  price: string;
  author: string;
  slug: string;
  image: IImage[];
  audio: IAudio[];
  reviews: IReview[];
}
