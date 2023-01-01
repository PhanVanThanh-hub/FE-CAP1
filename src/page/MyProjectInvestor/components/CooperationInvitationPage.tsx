import { CardMedia, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, Text } from "../../../components/elements";
import { COLOR } from "../../../constants";
import {
  fetchCooperationInvitation,
  selectListCooperationInvitation,
} from "../../../redux/contract/contactSlice";
import { selectFinishedCallApi } from "../../../redux/uiSlice";
import { ContractApiItems } from "../../../types/models/contract";
import { formatShortDateTime } from "../../../until/helpers";
import { formatMoney } from "../../../until/helpers/functions";
import Contract from "./Contract";

const CooperationInvitationPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [isOpenContract, setIsOpenContract] = useState<boolean>(false);
  const listContract = useSelector(selectListCooperationInvitation);
  const finishedCallApi = useSelector(selectFinishedCallApi);
  const match = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCooperationInvitation({}));
      setIsOpenContract(false);
      history.push(match.url);
    };
    fetchData();
  }, [dispatch, finishedCallApi, history, match.url]);

  const handleCloseModal = () => {
    history.push(match.url);
  };

  return (
    <Grid container spacing={3}>
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
              <Col
                sx={{
                  padding: "15px 20px",
                }}
              >
                <Row sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      margin: "10px 0px",
                      height: "150px",
                      width: "100%",
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
                    <Text>From :</Text>
                    <Text
                      sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}
                    >
                      {contract.startup.company}
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
                  }}
                >
                  <Text fontSize="caption">
                    {formatShortDateTime(contract.startup_deal_at)}
                  </Text>
                </Row>
              </Col>
            </Col>
          </Grid>
        );
      })}
      <Switch>
        <Route path={`${match.url}/:id`}>
          {isOpenContract && (
            <Contract open={isOpenContract} handleClose={handleCloseModal} />
          )}
        </Route>
      </Switch>
    </Grid>
  );
};

export default CooperationInvitationPage;
