import { Grid } from "@mui/material";
import React from "react";
import Menu from "../components/Menu";
import GeneralAccount from "../components/GenaralAccount";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Notify from "../components/Notify";
import PrivateAndSafe from "../components/PrivateAndSafe";

const SettingPage = () => {
  const match = useRouteMatch();

  return (
    <Grid container columns={15}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={12}>
        <Switch>
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
      </Grid>
    </Grid>
  );
};

export default SettingPage;
