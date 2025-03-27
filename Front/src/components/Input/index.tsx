import React from "react";
import { Input as StyledInput } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
