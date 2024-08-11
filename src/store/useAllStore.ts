import { IBookItem } from "src/services/index.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TUserState = {
  favorites: IBookItem[];
  cart: IBookItem[];
  booksToBuy: IBookItem[];
  addToFavorites: (favorite: IBookItem) => void;
  removeFromFavorites: (id: number) => void;
  addToCart: (cartItem: IBookItem) => void;
  removeFromCart: (id: number) => void;
  addBooksToBuy: (book: IBookItem) => void;
  removeFromBuyBook: (id: number) => void;
  clearBooksToBuy: () => void;
  selectedAllBooks: (book: IBookItem[]) => void
};

export const useAllStore = create(
  persist<TUserState>(
    (set) => ({
      favorites: [],
      cart: [],
      booksToBuy: [],
      addToFavorites: (payload) =>
        set((state) => {
          if (!state.favorites.find((item) => item.id === payload.id)) {
            return { favorites: [...state.favorites, payload] };
          }
          return state;
        }),
      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),
      addToCart: (cartItem) =>
        set((state) => {
          if (!state.cart.find((item) => item.id === cartItem.id)) {
            return { cart: [...state.cart, cartItem] };
          }
          return state;
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      addBooksToBuy: (payload) =>
        set((state) => {
          if (!state.booksToBuy.find((item) => item.id === payload.id)) {
            return { booksToBuy: [...state.booksToBuy, payload] };
          }
          return state;
        }),
      clearBooksToBuy: () =>
        set(() => ({
          booksToBuy: [],
        })),
        removeFromBuyBook: (id) =>
            set((state) => ({
              booksToBuy: state.booksToBuy.filter((item) => item.id !== id),
            })),
        selectedAllBooks: (payload) => 
            set(() => ({
                booksToBuy: payload
            }))
        }
    ),
    { name: "cart" }
  )
);
