import React from "react";
import "./Be"
import { useFormContext, Controller } from "react-hook-form";

type BeautifulInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

const BeautifulInput: React.FC<BeautifulInputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  error,
  helperText,
}) => {
  const { control } = useFormContext();

  return (
    <div className="beautiful-input">
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            required={required}
            className={error ? "error" : ""}
          />
        )}
      />
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default BeautifulInput;