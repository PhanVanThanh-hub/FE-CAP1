import { CardMedia } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { useSelector } from "react-redux";
import { selectGroup } from "../../../redux/group/groupSlice";

const GroupName = () => {
  const group = useSelector(selectGroup);

  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        borderRight: "1px solid",
        borderTop: "1px solid",
        position: "fixed",
        minWidth: "350px",
        marginTop: "70px",
      }}
    >
      <Row sx={{ alignItems: "center", padding: "10px 20px" }}>
        <CardMedia
          component="img"
          image={group.cover_image}
          alt="logo"
          sx={{ width: "80px", height: "50px", borderRadius: "12px" }}
        />
        <Text sx={{ marginLeft: "12px", fontWeight: "bold" }}>
          {group.name}
        </Text>
      </Row>
    </Col>
  );
};

export default GroupName;
