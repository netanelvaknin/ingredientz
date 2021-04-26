import { TextField as MuiTextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

interface TextFieldProps {
  label?: string;
  name: string;
  control: any;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  errorMessage?: string;
}

export const TextField = ({
  label,
  control,
  name,
  multiline = false,
  rows,
  error,
  errorMessage,
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiTextField
          {...field}
          label={label}
          variant="outlined"
          name={name}
          multiline={multiline}
          rows={rows}
          error={error}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default TextField;
