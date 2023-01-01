import React from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/Menu";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import InvestmentProjectPage from "./InvestmentProject";
import { Col } from "../../../components/elements";
import CooperationInvitationPage from "./CooperationInvitation";
import HistoryContractPage from "./HistoryContract";

const MyProjectPage = () => {
  const match = useRouteMatch();

  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "background.default" }}>
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
          <Col>
            <Switch>
              <Route path={`${match.url}`} exact>
                <ProjectList />
              </Route>
              <Route path={`${match.url}/projects`}>
                <ProjectList />
              </Route>
              <Route path={`${match.url}/investment_project`}>
                <InvestmentProjectPage />
              </Route>
              <Route path={`${match.url}/cooperation-invitation`}>
                <CooperationInvitationPage />
              </Route>
              <Route path={`${match.url}/history-contract`}>
                <HistoryContractPage />
              </Route>
            </Switch>
          </Col>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProjectPage;
