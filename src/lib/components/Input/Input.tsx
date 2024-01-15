import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...restProps }) => {
  const { className } = restProps;
  return (
    <input
      data-testid="Input"
      {...restProps}
      className={`p-1 border border-green-900 ${className || ""}`}
    />
  );
};

export default Input;
