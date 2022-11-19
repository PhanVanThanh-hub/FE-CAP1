import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export interface SelectOptions {
  label?: string;
  value: string | number;
}

export interface SelectFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOptions[];
  isMultipleSelection?: boolean;
}

export function SelectField({
  name,
  control,
  label,
  disabled,
  options,
  isMultipleSelection = true,
}: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return (
    <FormControl
      margin="normal"
      fullWidth
      error={invalid}
      disabled={disabled}
      sx={{
        margin: "0px",
        "& label.Mui-focused": {
          color: "button.primary",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "button.primary",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          fontSize: "16px",
          paddingLeft: "5px",
          "& fieldset": {
            borderColor: "button.primary",
          },
          "&:hover fieldset": {
            borderColor: "button.primary",
          },
          "&.Mui-focused fieldset": {
            borderColor: "button.primary",
          },
        },

        input: {
          "&::placeholder": {
            fontSize: "14px",
            paddingLeft: "0px",
          },
        },
      }}
    >
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
      <Select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        multiple={isMultipleSelection}
        defaultValue={[]}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {isMultipleSelection ? (
              selected.map((select: any) => (
                <Chip key={select} label={select} />
              ))
            ) : (
              <Chip key={selected} label={selected} />
            )}
          </Box>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
