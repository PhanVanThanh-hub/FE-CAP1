import { Grid } from "@mui/material";
import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { Col, UiIcon, Text } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import Project from "./Project";
import ProjectDetailModal from "./ProjectDetail";

const ProjectList = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { boolBag, setBoolBag } = useBoolBag({
    openModalProjectDetail: true,
  });
  const { openModalProjectDetail } = boolBag;

  const handleCloseProjectDetail = () => {
    setBoolBag({ openModalProjectDetail: false });
    history.push("/projects");
  };
  return (
    <Col
      sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      {/* <UiIcon icon="charm:plant-pot" size="300" />
      <Text fontSize="subtitle1">
        “If you want to go fast go alone, if you want to go far go together”
      </Text> */}
      <Grid container>
        <Grid
          item
          xs={3}
          onClick={() => {
            history.push("projects/1oked21ok2do");
            setBoolBag({ openModalProjectDetail: true });
          }}
        >
          <Project />
        </Grid>
      </Grid>
      <Switch>
        <Route path={`${match.url}/:id`}>
          {openModalProjectDetail && (
            <ProjectDetailModal
              open={openModalProjectDetail}
              handleClose={handleCloseProjectDetail}
            />
          )}
        </Route>
      </Switch>
    </Col>
  );
};

export default ProjectList;
