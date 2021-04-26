import { TextField as MuiTextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

interface TextFieldProps {
  label?: string;
  name: string;
  //   register: any;
  control: any;
  multiline?: boolean;
  rows?: number;
}

export const TextField = ({
  label,
  //   register,
  control,
  name,
  multiline = false,
  rows,
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
        />
      )}
    />
  );
};

export default TextField;
