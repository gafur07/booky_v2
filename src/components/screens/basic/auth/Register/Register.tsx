import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { StyledSubmitButton, UiButtonGoogle, UiInput } from "src/components/ui";
import { useRegisterMutation } from "src/services";
import { IAuthForm } from "src/services/auth/auth.interface";
import { useAuthPersistStore } from "src/store";
import { Link, useNavigate } from "react-router-dom";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const { signOn, token } = useAuthPersistStore();
  const { data, mutate: authRegister, isSuccess } = useRegisterMutation();

  const onSubmit = (values: IAuthForm) => {
    authRegister({
      ...values,
      phone: values.phone.replace(/ /g, "").substring(1),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      signOn({ token: data.token });
      navigate("/", { replace: true });
    }
  }, [isSuccess, authRegister, data, navigate, signOn]);

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
        Dizimnen ótiw
      </Typography>
      <form style={{ width: 325 }} onSubmit={handleSubmit(onSubmit)}>
        <UiInput
          label="Atínizdi"
          placeholder="Atíniz"
          type="text"
          register={register}
          name="name"
          errors={errors}
        />
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

        <StyledSubmitButton>Dizimnen ótiw</StyledSubmitButton>
      </form>
      <UiButtonGoogle>Sign up with Google</UiButtonGoogle>
      <Typography
        component={Link}
        to={"/login"}
        color="primary"
        fontWeight={600}
      >
        Kiriw
      </Typography>
    </Box>
  );
};

export { Register };
