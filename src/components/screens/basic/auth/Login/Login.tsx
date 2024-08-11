import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { StyledSubmitButton, UiButtonGoogle, UiInput } from "src/components/ui";
import { useLoginMutation } from "src/services";
import { IAuthForm } from "src/services/auth/auth.interface";
import { useAuthPersistStore } from "src/store";
import { Link, useNavigate } from "react-router-dom";

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const { signIn, token } = useAuthPersistStore();
  const { data, mutate: authLogin, isSuccess } = useLoginMutation();

  const onSubmit = (values: IAuthForm) => {
    authLogin({
      ...values,
      phone: values.phone.replace(/ /g, "").substring(1),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      signIn({ token: data.token });
      navigate("/", { replace: true });
    }
  }, [isSuccess, authLogin, data, navigate, signIn]);

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="50px"
    >
      <Typography color="#202020" fontSize="36px" fontWeight={600}>
        Kiriw
      </Typography>
      <form style={{ width: 325 }} onSubmit={handleSubmit(onSubmit)}>
        <UiInput
          label="Telefon nomerińizdi"
          placeholder="Telefon"
          type="phone"
          name="phone"
          register={register}
          mask={"+\\9\\98 99 999 99 99"}
          errors={errors}
        />

        <UiInput
          label="Parolińizdi"
          placeholder="Parol"
          type="password"
          register={register}
          name="password"
          errors={errors}
        />

        <StyledSubmitButton>Kiriw</StyledSubmitButton>
      </form>
      <UiButtonGoogle>Sign up with Google</UiButtonGoogle>
      <Typography
        component={Link}
        to={"/register"}
        color="primary"
        fontWeight={600}
      >
        Dizimnen ótiw
      </Typography>
    </Box>
  );
};

export { Login };
