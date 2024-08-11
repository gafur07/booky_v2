import { FC, ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider/ReactQueryProvider";
import { RouterProvider } from "./RouterProvider/RouterProvider";
import { MuiProvider } from "./MuiProvider/MuiProvider";

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <MuiProvider>
        <RouterProvider>{children}</RouterProvider>
      </MuiProvider>
    </ReactQueryProvider>
  );
};

export { GlobalProvider };
