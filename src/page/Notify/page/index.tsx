import { Box, Grid } from "@mui/material";
import React from "react";
import { Col } from "../../../components/elements";
import Menu from "../../Home/components/Menu";
import SuggestionsTab from "../../Home/components/SuggestionsTab";
import ListNotify from "../components/ListNotify";

const NotifyPage = () => {
  return (
    <Box sx={{ margin: " 0 ", backgroundColor: "background.default" }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={5}>
          <Col>
            <ListNotify />
          </Col>
        </Grid>
        <Grid item xs={2}>
          <SuggestionsTab />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotifyPage;
