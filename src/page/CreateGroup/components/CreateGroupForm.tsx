import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbs = [
  <Link underline="hover" key="1" href="/">
    <Text>Group</Text>
  </Link>,
  <Text key="2">Create Group</Text>,
];

const CreateGroupForm = () => {
  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        borderRight: "1px solid",
        borderTop: "1px solid",
      }}
    >
      <Col sx={{ padding: "10px 20px" }}>
        <Row>
          <Breadcrumbs
            separator=">"
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "white",
                fontSize: "12px",
              },
            }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Row>
        <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
          Create Group
        </Text>
      </Col>
    </Col>
  );
};

export default CreateGroupForm;
