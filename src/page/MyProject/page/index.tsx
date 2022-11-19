import React from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/Menu";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProjectList from "../components/ProjectList";

const MyProjectPage = () => {
  const match = useRouteMatch();

  return (
    <Box height="100vh" sx={{ backgroundColor: "background.default" }}>
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <Grid item xs={2} sx={{ paddingTop: "50px" }}>
          <Menu />
        </Grid>
        <Grid item xs={9} sx={{ paddingTop: "50px" }}>
          <ProjectList />
          {/* <Switch>
            <Route path={`${match.url} `}>
              <GeneralAccount />
            </Route>
            <Route path={`${match.url}/projects`}></Route>
          </Switch> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProjectPage;
