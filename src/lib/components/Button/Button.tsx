import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ ...restProps }) => {
  const { className, children } = restProps;
  return (
    <button
      data-testid="Button"
      {...restProps}
      className={`bg-green-500 text-gray-900 w-auto p-2 ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
