import { InputHTMLAttributes } from "react";

export type DefaultInputProps = {
  label?: string;
  width?: string;
  error?: string;
  line?: string;
  small?: boolean;
  isMultiline?: boolean;
  isEmpty?: boolean;
  adornment?: string;
  shrink?: boolean;
  rows?: number;
  type?: string;
  icon?: any;
  iconAction?: any;
  value?: any;
  autocomplete?: string;
  showPassword?: boolean;
  placeholder?: any;
  interval?: boolean;
  toggleShowPassword?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;
