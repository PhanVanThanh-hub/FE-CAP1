import { Avatar, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Col, Row, Text, UiButton, UiIcon } from "../../../components/elements";
import image from "../../../assets/image/auth/sign-in.png";

const Information = () => {
  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "24px",
      }}
    >
      <Col sx={{ padding: "30px 20px 10px ", position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt="logo"
          style={{ width: "100%", height: "250px", borderRadius: "12px" }}
        />
        <Grid container spacing={3}>
          <Grid item md={2}>
            <Avatar
              sx={{
                width: "120px",
                height: "120px",
                margin: "-40px 0px 0px auto",
              }}
            />
          </Grid>
          <Grid item md={10}>
            <Row sx={{ justifyContent: "space-between" }}>
              <Col>
                <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
                  Elian
                </Text>
                <Text>243 Follower</Text>
              </Col>
              <Row>
                <UiButton>
                  <Text>Message</Text>
                </UiButton>
                <UiButton backgroundColor="transparent">
                  <Row>
                    <UiIcon icon="fluent-mdl2:add-friend" />
                    <Text>Send Request</Text>
                  </Row>
                </UiButton>
              </Row>
            </Row>

            <Col
              sx={{
                paddingTop: "10px",
                alignItems: "end",
              }}
            >
              <Row sx={{ justifyContent: "center", alignItems: "flex-end" }}>
                <Row sx={{ alignItems: "center", marginRight: "40px" }}>
                  <UiIcon icon="fluent:status-16-regular" />
                  <Text sx={{ marginLeft: "5px" }}>Status</Text>
                </Row>
                <Row sx={{ alignItems: "center", marginRight: "40px" }}>
                  <UiIcon icon="ic:round-people" />
                  <Text sx={{ marginLeft: "5px" }}>Follower</Text>
                </Row>
                <Row sx={{ alignItems: "center", marginRight: "20px" }}>
                  <UiIcon icon="fluent-mdl2:add-friend" />
                  <Text sx={{ marginLeft: "5px" }}>Request Follower</Text>
                </Row>
              </Row>
            </Col>
          </Grid>
        </Grid>
      </Col>
    </Col>
  );
};

export default Information;
