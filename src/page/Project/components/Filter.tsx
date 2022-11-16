import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React from "react";
import { Col, Row, UiButton, UiInputField } from "../../../components/elements";
import UiAutoComplete from "../../../components/elements/UiAutoComplete";
import { categories, COLOR } from "../../../constants";

const Filter = () => {
  return (
    <Col>
      <Row>
        <Row
          sx={{
            backgroundColor: "background.default",
            width: "100%",
            padding: "10px 20px",
            borderRadius: "12px",
            alignItems: "center",
          }}
        >
          <UiInputField placeholder="Search" icon="material-symbols:search" />
          <Row sx={{ margin: "0px 10px" }} />
          <UiAutoComplete
            multiple={true}
            options={categories}
            placeholder="Categories"
            width="500px"
          />
          <UiButton sx={{ marginLeft: "20px" }}>Search</UiButton>
        </Row>
        <Row></Row>
      </Row>
    </Col>
  );
};

export default Filter;
