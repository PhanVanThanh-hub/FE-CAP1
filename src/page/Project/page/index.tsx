import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, UiButton } from "../../../components/elements";
import {
  fetchProjects,
  selectNextPage,
  selectPreviousPage,
  selectProjectsStartup,
} from "../../../redux/projects/projectSlice";
import Filter from "../components/Filter";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<any>({ page: 1 });
  const projects = useSelector(selectProjectsStartup);
  const nextPage = useSelector(selectNextPage);
  const previousPage = useSelector(selectPreviousPage);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
      await dispatch(fetchProjects(filter));
    };
    fetchData();
  }, [dispatch, filter]);

  const handleFilterCategory = (category: string) => {
    setFilter({ ...filter, category: category, page: 1 });
  };

  const handleFilterSearch = (projectName: string) => {
    setFilter({ ...filter, project_name: projectName, page: 1 });
  };

  const handleFilterPage = (page: number) => {
    setFilter({ ...filter, page: page });
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Col
        sx={{
          padding: "0px 60px ",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Col
          sx={{
            padding: "20px",
          }}
        >
          <Filter
            handleFilterCategory={handleFilterCategory}
            handleFilterSearch={handleFilterSearch}
          />
          <Row sx={{ margin: "10px 0px" }} />
          <ProjectList projects={projects} />
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "center",
              margin: "10px 0px",
            }}
          >
            {previousPage && (
              <UiButton
                onClick={() => {
                  setPage(page - 1);
                  handleFilterPage(page - 1);
                }}
              >
                Previous
              </UiButton>
            )}
            {nextPage && (
              <UiButton
                onClick={() => {
                  setPage(page + 1);
                  handleFilterPage(page + 1);
                }}
                sx={{ marginLeft: "10px" }}
              >
                Next
              </UiButton>
            )}
          </Row>
        </Col>
      </Col>
    </Box>
  );
};

export default ProjectsPage;
