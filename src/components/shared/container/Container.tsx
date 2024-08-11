import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { Container as ContainerSection } from "@mui/material";
interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = (props) => {
  const { children } = props;
  return (
    <ContainerSection
      maxWidth="lg"
      sx={{
        p: "0!important",
        "@media(maxWidth: 1280px)": {
          px: "20px"
        }
      }}
    >
      {children}
    </ContainerSection>
  );
};

export { Container };
