import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Col, Text, UiDivider } from "../../../components/elements";
import Filter from "../components/Filter";
import ProjectList from "../components/ProjectList";
import image from "../../../assets/image/auth/sign-up.png";
import * as Scroll from "react-scroll";
import Introduce from "../components/Introduce";
import Video from "../components/Video";
import Member from "../components/Member";
import Investment from "../components/Investment";
let Link = Scroll.Link;
const ProjectsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100vh",
      }}
    >
      <Col
        sx={{
          padding: "0px 60px ",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Col
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "12px",
            height: "80vh",
            padding: "20px",
          }}
        >
          <Filter />
          <ProjectList />
        </Col>
      </Col>
    </Box>
  );
};

export default ProjectsPage;
