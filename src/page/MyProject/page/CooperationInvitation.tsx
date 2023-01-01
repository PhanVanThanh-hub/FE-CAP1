import { CardMedia, Chip, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, Text } from "../../../components/elements";
import { COLOR } from "../../../constants";
import {
  fetchCooperationInvitation,
  fetchHistoryContract,
  selectCountContract,
  selectListCooperationInvitation,
} from "../../../redux/contract/contactSlice";
import { selectFinishedCallApi } from "../../../redux/uiSlice";
import { ContractApiItems } from "../../../types/models/contract";
import { formatShortDateTime } from "../../../until/helpers";
import { formatMoney } from "../../../until/helpers/functions";
import Contract from "../components/Contract";

const PAGE_SIZE = 6;

const CooperationInvitationPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [isOpenContract, setIsOpenContract] = useState<boolean>(false);
  const listContract = useSelector(selectListCooperationInvitation);
  const finishedCallApi = useSelector(selectFinishedCallApi);
  const count = useSelector(selectCountContract);
  const match = useRouteMatch();
  const pagination = Math.ceil(count / PAGE_SIZE);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCooperationInvitation({ page }));
      setIsOpenContract(false);
      history.push(`${match.url}`);
    };
    fetchData();
  }, [dispatch, finishedCallApi, history, match.url, page]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchHistoryContract({}));
    };
    fetchData();
  }, [dispatch]);

  const handleCloseModal = () => {
    setIsOpenContract(false);
    history.push(`${match.url}`);
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
          Cooperation Invitation
        </Text>
      </Row>
      <Grid container spacing={3} columns={12}>
        {listContract.map((contract: ContractApiItems) => {
          return (
            <Grid item key={contract.id} xs={4}>
              <Col
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "background.paper",
                  cursor: "pointer",
                  border: "1px solid transparent",
                  width: "100%",
                  "&:hover": {
                    borderColor: COLOR.icon.primary,
                  },
                }}
                onClick={() => {
                  history.push(`${match.url}/${contract.id}`);
                  setIsOpenContract(true);
                }}
              >
                <Col sx={{ padding: "15px 20px" }}>
                  <Row sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      sx={{
                        margin: "10px 0px",
                        height: "150px",
                        borderRadius: "12px",
                      }}
                      image={contract.project.image}
                      alt="Paella dish"
                    />
                  </Row>
                  <Text fontSize="body2" sx={{ fontWeight: "bold" }}>
                    Project : {contract.project.project_name}
                  </Text>

                  <Col sx={{ marginTop: "10px" }}>
                    <Row sx={{ justifyContent: "space-between" }}>
                      <Text>To :</Text>
                      <Text
                        sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}
                      >
                        {contract.investor.company}
                      </Text>
                    </Row>
                    <Row sx={{ justifyContent: "space-between" }}>
                      <Text>Investment Money :</Text>
                      <Text
                        sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}
                      >
                        {formatMoney(Number(contract.investment_money))}
                      </Text>
                    </Row>
                    <Row sx={{ justifyContent: "space-between" }}>
                      <Text>investment_percent :</Text>
                      <Text
                        sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}
                      >
                        {contract.investment_percent}%
                      </Text>
                    </Row>
                  </Col>
                  <Row
                    sx={{
                      marginTop: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text fontSize="caption">
                      {formatShortDateTime(contract.startup_deal_at)}
                    </Text>
                    {contract.startup_confirm ? (
                      <Chip color="primary" label="Pending" />
                    ) : (
                      <Chip color="warning" label="Refuse" />
                    )}
                  </Row>
                </Col>
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
      <Switch>
        <Route path={`${match.url}/:id`}>
          {isOpenContract && (
            <Contract open={isOpenContract} handleClose={handleCloseModal} />
          )}
        </Route>
      </Switch>
    </Col>
  );
};

export default CooperationInvitationPage;
