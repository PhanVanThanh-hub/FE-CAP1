import React from "react";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";
import AddProjectModal from "./AddProjectModal";
import { useBoolBag } from "../../../hooks";

function createData(
  id: string,
  name: string,
  fat: number,
  carbs: number,
  protein: number,
  status: boolean
) {
  return { id, name, fat, carbs, protein, status };
}

const rows = [
  createData("#1231", "Frozen yoghurt", 6.0, 24, 4.0, true),
  createData("#1k30", "Ice cream sandwich", 9.0, 37, 4.3, false),
  createData("#wq213", "Eclair", 16.0, 24, 6.0, false),
  createData("#921", "Cupcake", 3.7, 67, 4.3, true),
  createData("#3291", "Gingerbread", 16.0, 49, 3.9, false),
];

const ProjectList = () => {
  const { boolBag, setBoolBag } = useBoolBag({ isOpenModal: false });
  const { isOpenModal } = boolBag;

  const handleCloseModal = () => {
    setBoolBag({ isOpenModal: false });
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
            <Table
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none",
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="center">
                      {row.status ? (
                        <Chip label="Open" color="success" variant="outlined" />
                      ) : (
                        <Chip
                          label="Close"
                          color="warning"
                          variant="outlined"
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Col>
      </Col>
      <AddProjectModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </Col>
  );
};

export default ProjectList;
