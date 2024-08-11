import { Button, ButtonProps } from "@mui/material"
import { FC, ReactNode } from "react"

interface UiButtonProps {
  children?: ReactNode
}

const UiButton: FC<UiButtonProps & ButtonProps> = (props) => {
  return (
      <Button sx={{
        transition: "all 0.2s ease-in-out",
        py: "10px",
        px: "24px",
        borderRadius: "16px",
        cursor: "pointer",
        fontWeight: 600,
        textTransform: "revert",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "fit-content",
        "&:hover": {
          opacity: 0.7
        }
      }} {...props} />
  )
}

export { UiButton }