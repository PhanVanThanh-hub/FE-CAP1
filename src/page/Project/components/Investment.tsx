import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { InvestorProjectApiItem } from "../../../types/models/projects";
import { formatMoney } from "../../../until/helpers/functions";
import { formatShortDateTime } from "../../../until/helpers";

interface Props {
  investment: number;
  investor_project: InvestorProjectApiItem[];
  percent: number;
}

const Investment = ({ investment, investor_project, percent }: Props) => {
  const totalAmountReceived = investor_project.reduce(
    (totalAmount, investor) => totalAmount + Number(investor.investment_money),
    0
  );

  const percentReceived = (totalAmountReceived / investment) * 100;

  return (
    <Col sx={{ margin: "20px 0px" }}>
      <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
        Investment
      </Text>
      <Row
        sx={{
          alginItems: "center",
          width: "100%",
          margin: "20px 0px",
        }}
      >
        <Row
          sx={{
            height: "50px",
            width: "70%",
            backgroundColor: "#0A0F23",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Row
            sx={{
              height: "100%",
              width: `${percentReceived}%`,
              backgroundColor: "#0F4C75",
            }}
          />
          <Text sx={{ position: "absolute", top: "25%", right: "5%" }}>
            {formatMoney(totalAmountReceived)}/{formatMoney(investment)}
          </Text>
        </Row>
      </Row>
      <Col sx={{ padding: "20px 0px", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Investor</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investor_project.map(
                (investor_project: InvestorProjectApiItem) => {
                  const { date_create, investor, investment_money } =
                    investor_project;
                  return (
                    <TableRow
                      key={investor_project.id}
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
                      <TableCell>{formatShortDateTime(date_create)}</TableCell>
                      <TableCell component="th" scope="row">
                        {investor.profile.name}
                      </TableCell>
                      <TableCell>{formatMoney(investment_money)}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Col>
    </Col>
  );
};

export default Investment;
