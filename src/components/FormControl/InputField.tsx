import { TextField, FormLabel, FormControl } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField({
  name,
  control,
  label,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <FormControl sx={{ marginBottom: "10px" }}>
      <FormLabel
        sx={{
          fontSize: "0.875rem",
          color: "rgb(97, 97, 97)",
          fontWeight: "600",
          marginBottom: "8px",
          lineHeight: "1.4375em",
        }}
      >
        {label}
      </FormLabel>
      <TextField
        sx={{
          margin: "0px",
          "& label.Mui-focused": {
            color: "#D06666",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#D06666",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            fontSize: "16px",
            paddingLeft: "5px",
            "& fieldset": {
              borderColor: "#D06666",
            },
            "&:hover fieldset": {
              borderColor: "#D06666",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D06666",
            },
          },
          input: {
            "&::placeholder": {
              fontSize: "14px",
              paddingLeft: "0px",
            },
          },
        }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        error={invalid}
        helperText={error?.message}
        inputProps={inputProps}
        fullWidth
        margin="normal"
      />
    </FormControl>
  );
}
