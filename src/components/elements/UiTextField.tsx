import { TextField, FormControl, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { UiIcon } from "./UiIcon";

interface Props {
  placeholder: string;
  width?: string;
  icon?: string;
  onChange: (projectName: string) => void;
}

export function UiInputField({ placeholder, width, icon, onChange }: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl>
      <TextField
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ marginLeft: "10px" }}>
              {icon && <UiIcon icon={icon} />}
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
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
            padding: "10px 5px",
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
