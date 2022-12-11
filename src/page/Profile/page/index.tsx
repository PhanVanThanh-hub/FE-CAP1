import { Grid } from "@mui/material";
import React from "react";
import { Col, Row } from "../../../components/elements";
import Post from "../../../components/shared/Post";
import CreatePost from "../../Home/components/CreatePost";
import Header from "../components/Header";
import Information from "../components/Information";
import Introduce from "../components/Introduce";

const ProfilePage = () => {
  return (
    <Col
      sx={{
        backgroundColor: "background.default",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <Col sx={{ width: "90%", paddingTop: "20px" }}>
        <Header />
        <Row sx={{ padding: "10px 0px" }} />
        <Information />
        <Row sx={{ padding: "10px 0px" }} />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item md={5}>
            <Introduce />
          </Grid>
          <Grid item md={7}>
            <CreatePost />
            <Post />
          </Grid>
        </Grid>
      </Col>
    </Col>
  );
};

export default ProfilePage;
