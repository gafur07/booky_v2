import {
  AudioBook,
  BookInfo,
  Cart,
  Category,
  Home,
  Login,
  Register,
} from "src/components/screens";
import { NotFound } from "src/components/shared";

export { Register } from "src/components/screens";

export const routes = [
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

  { path: "/", element: <Home /> },
  { path: "/*", element: <NotFound /> },

  { path: "/categories/:slug", element: <Category /> },
  { path: "/book/:slug", element: <BookInfo /> },
  { path: "/audio-books/:slug", element: <AudioBook /> },

  { path: "/cart", element: <Cart /> },
];
