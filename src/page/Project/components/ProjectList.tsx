import { Grid } from "@mui/material";
import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { Col, UiIcon, Text, Row } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import { ProjectApiItem } from "../../../types/models/projects";
import Project from "./Project";
import ProjectDetailModal from "./ProjectDetail";

interface Props {
  projects: ProjectApiItem[];
}

const ProjectList = ({ projects }: Props) => {
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
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        minHeight: "70vh",
      }}
    >
      {!!!projects.length && (
        <Col sx={{ alignItems: "center", justifyContent: "center" }}>
          <UiIcon icon="charm:plant-pot" size="300" />
          <Text fontSize="subtitle1">
            “If you want to go fast go alone, if you want to go far go together”
          </Text>
        </Col>
      )}
      <Grid container spacing={3} columns={12}>
        {projects.map((project: ProjectApiItem) => {
          return (
            <Grid key={project.id} item xs={3}>
              <Row
                onClick={() => {
                  history.push(`projects/${project.id}`);
                  setBoolBag({ openModalProjectDetail: true });
                }}
              >
                <Project project={project} />
              </Row>
            </Grid>
          );
        })}
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
