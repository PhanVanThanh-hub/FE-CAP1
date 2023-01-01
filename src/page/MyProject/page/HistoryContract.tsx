import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, Text } from "../../../components/elements";
import {
  fetchHistoryContract,
  selectCountHistoryContract,
  selectHistoryContract,
} from "../../../redux/contract/contactSlice";
import { ContractApiItems } from "../../../types/models/contract";
import { formatShortDateTime } from "../../../until/helpers";
import { formatMoney } from "../../../until/helpers/functions";
import ContractDetailModal from "../components/ContractDetail";

const PAGE_SIZE = 6;

const HistoryContractPage = () => {
  const dispatch = useAppDispatch();
  const [isOpenContract, setIsOpenContract] = useState<boolean>(false);
  const listContract = useSelector(selectHistoryContract);
  const count = useSelector(selectCountHistoryContract);
  const pagination = Math.ceil(count / PAGE_SIZE);
  const [page, setPage] = useState<number>(1);
  const [contract, setContract] = useState<ContractApiItems>();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchHistoryContract({ page }));
    };
    fetchData();
  }, [dispatch, page]);

  const handleCloseModal = () => {
    setIsOpenContract(false);
  };

  const changePage = (event: any, pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <Col sx={{ width: "100%", marginBottom: "50px" }}>
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
          History Contract
        </Text>
      </Row>
      <Col sx={{ padding: "20px 0px", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Investor</TableCell>
                <TableCell>Project</TableCell>
                <TableCell align="center">Investment Money</TableCell>
                <TableCell align="center">Percent</TableCell>
                <TableCell>Investment Day</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listContract.map((contract: ContractApiItems) => {
                const {
                  id,
                  investment_money,
                  investment_percent,
                  close_deal_at,
                } = contract;
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
                    onClick={() => {
                      setContract(contract);
                      setIsOpenContract(true);
                    }}
                  >
                    <TableCell>#{id}</TableCell>
                    <TableCell>{contract.investor.company}</TableCell>
                    <TableCell>{contract.project.project_name}</TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {formatMoney(Number(investment_money))}
                    </TableCell>
                    <TableCell align="center">{investment_percent}%</TableCell>
                    <TableCell>{formatShortDateTime(close_deal_at)}</TableCell>
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
      {isOpenContract && contract && (
        <ContractDetailModal
          contract={contract}
          open={isOpenContract}
          handleClose={handleCloseModal}
        />
      )}
    </Col>
  );
};

export default HistoryContractPage;
