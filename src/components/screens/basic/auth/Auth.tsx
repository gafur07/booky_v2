import { AppBar, Container } from "@mui/material";
import { FC, ReactNode, useEffect, useRef } from "react";
import { Register as RegisterForm } from "./Register/Register";
import { Login as LoginForm } from "./Login/Login";

interface IAuthProps {
  children?: ReactNode;
}

const Auth: FC<IAuthProps> = ({ children }) => {
  const authRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authRef.current) {
      authRef.current?.scrollIntoView();
    }
  }, [authRef]);
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        bgcolor: "white",
        py: "40px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </AppBar>
  );
};

export const Register = () => (
  <Auth>
    <RegisterForm />
  </Auth>
);


export const Login = () => (
  <Auth>
    <LoginForm />
  </Auth>
);
