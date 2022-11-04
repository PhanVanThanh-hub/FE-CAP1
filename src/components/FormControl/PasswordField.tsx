import { TextField, FormLabel, FormControl } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function PasswordField({
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
    <FormControl sx={{ ...inputProps }}>
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
            color: "#52734D",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#52734D",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            fontSize: "16px",
            paddingLeft: "5px",
            "& fieldset": {
              borderColor: "#52734D",
            },
            "&:hover fieldset": {
              borderColor: "#52734D",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#52734D",
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
        type="password"
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
