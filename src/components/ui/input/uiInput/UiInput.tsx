import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import ReactInputMask, { Props } from "react-input-mask";

interface IUiInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: {
    [key: string]: FieldError | undefined;
  };
}

const UiInput: FC<IUiInputProps & Props> = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors,
  ...rest
}) => {
  return (
    <Box mb={"15px"}>
      {name === "phone" ? (
        <>
          <ReactInputMask
            {...rest}
            style={{
              border: "1px solid #2d71ae",
              borderRadius: "16px",
              padding: 13,
              width: "100%",
            }}
            placeholder={placeholder}
            type={type}
            {...register(name, { required: `${label} kiritiń` })}
            className={errors[name] ? "input-error" : ""}
          />
        </>
      ) : (
        <>
          <input
            type={type}
            placeholder={placeholder}
            {...register(name, { required: `${label} kiritiń` })}
            className={errors[name] ? "input-error" : ""}
            style={{
              border: "1px solid #2d71ae",
              borderRadius: "16px",
              padding: 13,
              width: "100%",
            }}
          />
        </>
      )}
      {errors[name] && <Typography color="red" fontSize={14}>{errors[name]?.message}</Typography>}
    </Box>
  );
};

export { UiInput };
