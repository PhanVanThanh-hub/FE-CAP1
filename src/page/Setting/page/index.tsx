import React from "react";
import { Grid } from "@mui/material";
import Menu from "../components/Menu";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Notify from "../components/Notify";
import PrivateAndSafe from "../components/PrivateAndSafe";
import { Col } from "../../../components/elements";
import GeneralAccount from "../components/GenarakAccount";

const SettingPage = () => {
  const match = useRouteMatch();

  return (
    <Grid container columns={15} sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={12} sx={{}}>
        <Col
          sx={{
            backgroundColor: "background.default",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Switch>
            <Route path={`${match.url} `}>
              <GeneralAccount />
            </Route>
            <Route path={`${match.url}/general-account`}>
              <GeneralAccount />
            </Route>
            <Route path={`${match.url}/notify`}>
              <Notify />
            </Route>
            <Route path={`${match.url}/private-safe`}>
              <PrivateAndSafe />
            </Route>
          </Switch>
        </Col>
      </Grid>
    </Grid>
  );
};

export default SettingPage;
