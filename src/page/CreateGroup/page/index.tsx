import { Grid } from "@mui/material";
import React from "react";
import { Col } from "../../../components/elements";
import CreateGroupForm from "../components/CreateGroupForm";

const CreateGroupPage = () => {
  return (
    <Col sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      {/* <Header /> */}
      <Grid container>
        <Grid item xs={3}>
          <CreateGroupForm />
        </Grid>
        {/* <Grid item xs={9}>
          <Banner />
        </Grid> */}
      </Grid>
    </Col>
  );
};

export default CreateGroupPage;
