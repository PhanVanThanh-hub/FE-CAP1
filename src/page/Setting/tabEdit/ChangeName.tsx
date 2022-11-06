import React from "react";
import { Divider, TextField } from "@mui/material";
import { Col, Row, Text, UiButton, UiIcon } from "../../../components/elements";
import "animate.css";

interface Props {
  backMainTab: () => void;
}

const ChangeName = ({ backMainTab }: Props) => {
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Name
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Text sx={{ fontWeight: "bold" }}>Name</Text>
      <Row sx={{ alignItems: "center", marginTop: "10px" }}>
        <TextField
          placeholder="Not Elian"
          sx={{
            width: "30%",
            marginRight: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontSize: "16px",
              paddingLeft: "5px",
            },
            input: {
              padding: "7px 10px",
            },
          }}
        />
        <UiButton>Save</UiButton>
      </Row>
    </Col>
  );
};

export default ChangeName;
