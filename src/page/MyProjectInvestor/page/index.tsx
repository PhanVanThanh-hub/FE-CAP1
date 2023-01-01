import { Box, Grid } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CooperationInvitationPage from "../components/CooperationInvitationPage";
import Menu from "../components/Menu";
import InvestmentProjectPage from "./InvestmentProjects";

const MyProjectInvestorPage = () => {
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
          <Switch>
            <Route path={`${match.url} `}>
              <CooperationInvitationPage />
            </Route>
            <Route path={`${match.url}/cooperation-invitation`}>
              <CooperationInvitationPage />
            </Route>
            <Route path={`${match.url}/projects`}>
              <InvestmentProjectPage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProjectInvestorPage;
