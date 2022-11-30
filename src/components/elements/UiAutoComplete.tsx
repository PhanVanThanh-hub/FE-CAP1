import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React from "react";
import { COLOR } from "../../constants";
import { UiIcon } from "./index";

interface Props {
  multiple?: boolean;
  options: { key: number; name: string }[];
  placeholder: string;
  width?: string;
  setSelectedCategories?: any;
}

const UiAutoComplete = ({
  multiple = false,
  options,
  placeholder,
  width,
  setSelectedCategories,
}: Props) => {
  return (
    <Autocomplete
      multiple={multiple}
      limitTags={2}
      id="tags-outlined"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      onChange={(event, value) => setSelectedCategories(value)}
      sx={{
        margin: "0px",
        width: width,

        "& .span .MuiAutocomplete-tag": {
          backgroundColor: "transparent",
        },
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
          "& .MuiSvgIcon-root": {
            color: COLOR.icon.primary,
          },
        },
        input: {
          "&::placeholder": {
            fontSize: "14px",
            paddingLeft: "0px",
          },
        },
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<UiIcon icon="carbon:checkbox" />}
            checkedIcon={<UiIcon icon="carbon:checkbox-checked" />}
            style={{
              marginRight: 8,
            }}
            checked={selected}
            sx={{
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{
            input: {
              "&::placeholder": {
                fontSize: "14px",
                paddingLeft: "0px",
              },
            },
          }}
        />
      )}
    />
  );
};

export default UiAutoComplete;
