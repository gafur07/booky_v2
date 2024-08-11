import { FC } from "react";
import ReactInputMask, { Props } from "react-input-mask";
import clsx from "clsx";
import styles from "./mask.module.scss";

interface UiInputMaskProps {
  mySize?: "small" | "middle" | "large";
}

const UiInputMask: FC<UiInputMaskProps & Props> = (props) => {
  const { mySize, ...rest } = props;
  const { "aria-invalid": isInvalid, disabled } = props;
  return (
    <ReactInputMask
      {...rest}
      className={clsx(
        styles.phone,
        styles[mySize ? mySize : "large"],
        isInvalid && styles.error,
        disabled && styles.disabled
      )}
    />
  );
};

export { UiInputMask };