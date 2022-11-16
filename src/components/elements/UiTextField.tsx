import { TextField, FormControl, InputAdornment } from "@mui/material";
import * as React from "react";
import { UiIcon } from "./UiIcon";

interface Props {
  placeholder: string;
  width?: string;
  icon?: string;
}

export function UiInputField({ placeholder, width, icon }: Props) {
  return (
    <FormControl>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ marginLeft: "10px" }}>
              {icon && <UiIcon icon={icon} />}
            </InputAdornment>
          ),
        }}
        sx={{
          margin: "0px",
          width: width,
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
        placeholder={placeholder}
        fullWidth
        margin="normal"
      />
    </FormControl>
  );
}
