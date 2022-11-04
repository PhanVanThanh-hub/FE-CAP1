import { Icon } from "@iconify/react";
import { Button, Divider, TextField } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import "animate.css";

interface Props {
  backMainTab: () => void;
}

const ChangeName = ({ backMainTab }: Props) => {
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Name
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
      <Text sx={{ fontWeight: "bold" }}>Name</Text>
      <Row sx={{ alignItems: "center", marginTop: "10px" }}>
        <TextField
          placeholder="Not Elian"
          sx={{
            width: "30%",
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
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#52734D",
            color: "white",
            borderRadius: "12px",
            padding: "5px 20px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#52734D",
            },
          }}
        >
          Save
        </Button>
      </Row>
    </Col>
  );
};

export default ChangeName;
