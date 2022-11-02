import { Box, Grid } from "@mui/material";
import React from "react";
import Menu from "../components/Menu";
import SuggestionsTab from "../components/SuggestionsTab";
import CreatePost from "../components/CreatePost";
import { Col } from "../../../components/elements";
import Post from "../../../components/shared/Post";

const HomePage = () => {
  return (
    <Box height="100%" sx={{ margin: " 0 " }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={4}>
          <Col>
            <CreatePost />
            <Post />
          </Col>
        </Grid>
        <Grid item xs={2}>
          <SuggestionsTab />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
