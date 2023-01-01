import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiInputField,
} from "../../../components/elements";
import { CardMedia, Grid, Pagination } from "@mui/material";
import InvestmentDetail from "../components/InvestmentDetail";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { useSelector } from "react-redux";
import {
  fetchProjectsStartup,
  selectCountProjectsPagination,
  selectProjectsStartup,
} from "../../../redux/projects/projectSlice";
import { formatDate } from "../../../until/helpers";
import { ProjectApiItem } from "../../../types/models/projects";
import { formatMoney } from "../../../until/helpers/functions";

const PAGE_SIZE = 6;

const InvestmentProjectPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const projects = useSelector(selectProjectsStartup);
  const count = useSelector(selectCountProjectsPagination);
  const pagination = Math.ceil(count / PAGE_SIZE);
  const match = useRouteMatch();
  const history = useHistory();
  const [projectOpen, setProjectOpen] = useState<ProjectApiItem>();
  const [filter, setFilter] = useState<any>({ page: 1 });

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProjectsStartup({ ...filter }));
    };
    fetchData();
  }, [dispatch, filter]);

  const changePage = (event: any, pageNumber: number) => {
    setFilter({ ...filter, page: pageNumber });
  };

  const handleFilterSearch = (projectName: string) => {
    setFilter({ project_name: projectName, page: 1 });
  };

  return (
    <Col>
      <Row
        sx={{
          backgroundColor: "background.paper",
          padding: "10px 20px",
          borderRadius: "12px",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Investment Project
        </Text>
        <UiInputField
          placeholder="Search"
          icon="material-symbols:search"
          onChange={handleFilterSearch}
        />
      </Row>
      <Grid container spacing={3} columns={9}>
        {projects.map((project) => {
          return (
            <Grid item xs={3}>
              <Col
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "12px",
                  padding: "10px 20px",
                }}
              >
                <Text sx={{ fontWeight: "bold" }}>{project.project_name}</Text>
                <Text fontSize="caption" sx={{ marginBottom: "5px" }}>
                  {formatDate(project.date_created)}
                </Text>
                <CardMedia
                  component="img"
                  height="150"
                  image={project.image}
                  alt="Paella dish"
                  sx={{ borderRadius: "12px" }}
                />
                <Row
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <Col>
                    <Text>Total call for funds:</Text>
                    <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                      {formatMoney(project.total_funds)}
                    </Text>
                  </Col>
                  <UiButton
                    onClick={() => {
                      history.push(`investment_project/${project.id}`);
                      setIsOpenModal(true);
                      setProjectOpen(project);
                    }}
                  >
                    Explore
                  </UiButton>
                </Row>
              </Col>
            </Grid>
          );
        })}
      </Grid>
      <Row sx={{ justifyContent: "flex-end", margin: "10px 0px" }}>
        <Pagination
          count={pagination}
          color="secondary"
          onChange={changePage}
        />
      </Row>
      {projectOpen && (
        <Switch>
          <Route path={`${match.url}/:id`}>
            <InvestmentDetail
              isOpenModal={isOpenModal}
              handleCloseModal={() => {
                history.replace("/my-projects/investment_project");
                setIsOpenModal(false);
              }}
              project={projectOpen}
            />
          </Route>
        </Switch>
      )}
    </Col>
  );
};

export default InvestmentProjectPage;
