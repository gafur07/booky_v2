import { create } from "zustand";
import { persist } from "zustand/middleware";

type IToken = {
  token: string | null;
}

interface IAuthPersistStore {
  token: IToken["token"];
  signIn: (tokens: { token: string }) => void;
  signOn: (tokens: { token: string }) => void;
  signOut: () => void;
}

const useAuthPersistStore = create(
  persist<IAuthPersistStore>(
    (set) => ({
      token: null,
      signIn: ({ token }) => set({ token }),
      signOn: ({ token }) => set({ token }),
      signOut: () => set({ token: null }),
    }),
    { name: "token" }
  )
);

export { useAuthPersistStore }