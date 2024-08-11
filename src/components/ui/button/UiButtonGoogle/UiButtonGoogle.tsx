import React from "react";
import { BkGoogleLogo } from "src/assets/images";
import "./button.google.scss";

interface UiButtonGoogleProps {
    children?: React.ReactNode
}

const UiButtonGoogle: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & UiButtonGoogleProps
> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button style={{width: "325px"}} className={`gsi-material-button w-[305px] ${className}`} {...rest}>
      <div className="gsi-material-button-state"></div>
      <div className="gsi-material-button-content-wrapper">
        <div className="gsi-material-button-icon">
          <img src={BkGoogleLogo} />
        </div>
        <span className="gsi-material-button-contents">
          {children}
        </span>
        {/* <span className="hidden">{children}</span> */}
      </div>
    </button>
  );
};

export { UiButtonGoogle };
