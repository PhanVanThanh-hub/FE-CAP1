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
}

export function SelectField({
  name,
  control,
  label,
  disabled,
  options,
}: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return (
    <FormControl margin="normal" fullWidth error={invalid} disabled={disabled}>
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
        multiple
        defaultValue={[]}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Chip"
            sx={{
              borderRadius: "20px",
            }}
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((select: any) => (
              <Chip key={select} label={select} />
            ))}
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
