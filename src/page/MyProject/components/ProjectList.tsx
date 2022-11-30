import React, { useEffect, useState } from "react";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import {
  Chip,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import AddProjectModal from "./AddProjectModal";
import { useBoolBag } from "../../../hooks";
import { useAppDispatch } from "../../../app/hooks";
import { useSelector } from "react-redux";
import {
  fetchProjectsStartup,
  selectCountProjectsPagination,
  selectProjectsStartup,
} from "../../../redux/projects/projectSlice";
import { ProjectApiItem } from "../../../types/models/projects";
import { formatDate } from "../../../until/helpers";
import { selectFinishedCallApi, selectStatus } from "../../../redux/uiSlice";
import { STATUS_AXIOS } from "../../../constants";

const PAGE_SIZE = 5;

const ProjectList = () => {
  const { boolBag, setBoolBag } = useBoolBag({ isOpenModal: false });
  const { isOpenModal } = boolBag;
  const dispatch = useAppDispatch();
  const projects = useSelector(selectProjectsStartup);
  const status = useSelector(selectStatus);
  const isFinishCallApi = useSelector(selectFinishedCallApi);
  const count = useSelector(selectCountProjectsPagination);
  const pagination = Math.ceil(count / PAGE_SIZE);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProjectsStartup({ page }));
    };
    fetchData();
  }, [dispatch, page]);

  useEffect(() => {
    if (status === STATUS_AXIOS.OK) {
      setBoolBag({ isOpenModal: false });
    }
  }, [setBoolBag, status, isFinishCallApi]);

  const handleCloseModal = () => {
    setBoolBag({ isOpenModal: false });
  };

  const changePage = (event: any, pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <Col sx={{ overflowY: "auto" }}>
      <Col
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "22px",
          border: "1px solid rgb(3, 6, 20)",
          padding: "10px 20px",
        }}
      >
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text fontSize="subtitle2">My Project</Text>
          <UiIcon
            icon="material-symbols:add-circle-outline"
            size="30"
            onClick={() => setBoolBag({ isOpenModal: true })}
          />
        </Row>
        <Col sx={{ padding: "20px 0px", overflow: "hidden" }}>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Project Owner</TableCell>
                  <TableCell>Establish</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project: ProjectApiItem) => {
                  const {
                    id,
                    project_name,
                    category,
                    project_owner,
                    email,
                    establish,
                    status,
                  } = project;
                  return (
                    <TableRow
                      key={id}
                      hover
                      sx={{
                        cursor: "pointer",
                        "& .MuiTableCell-root": {
                          fontSize: "0.875rem",
                          color: "rgb(213, 217, 233)",
                          borderColor: "rgba(213, 217, 233, 0.082)",
                          borderBottom: "1px solid rgba(213, 217, 233, 0.082)",
                          maxWidth: 100,
                        },
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>#{id}</TableCell>
                      <TableCell component="th" scope="row">
                        {project_name}
                      </TableCell>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>
                        {project_owner} - {email}
                      </TableCell>
                      <TableCell>{formatDate(establish)}</TableCell>
                      <TableCell align="center">
                        {status ? (
                          <Chip
                            label="Open"
                            color="success"
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label="Close"
                            color="warning"
                            variant="outlined"
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Col>
        <Row sx={{ justifyContent: "flex-end", margin: "10px 0px" }}>
          <Pagination
            count={pagination}
            color="secondary"
            onChange={changePage}
          />
        </Row>
      </Col>
      <AddProjectModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </Col>
  );
};

export default ProjectList;
