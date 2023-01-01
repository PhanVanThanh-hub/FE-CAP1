import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import {
  fetchInvestorStatistics,
  selectInvestorStatistics,
} from "../../../redux/contract/contactSlice";
import { formatMoney } from "../../../until/helpers/functions";

const RowStyle2 = ({
  icon,
  field,
  data,
  bgColor,
  note,
  rate,
}: {
  icon: string;
  field: string;
  data: number | string;
  bgColor: string;
  note: string;
  rate: number;
}) => {
  return (
    <Row
      sx={{
        backgroundColor: bgColor,
        borderRadius: "12px",
        padding: "10px 20px",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Col>
        <Text sx={{ fontWeight: "bold" }}>{field}</Text>
        <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
          {data}
        </Text>
      </Col>
      <Row sx={{ height: "100%", alignItems: "center" }}>
        <UiIcon icon={icon} size="80px" color="white" />
      </Row>
    </Row>
  );
};

const Statistics = React.memo(() => {
  const dispatch = useAppDispatch();
  const investorStatistics = useSelector(selectInvestorStatistics);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchInvestorStatistics());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Col sx={{ marginBottom: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <RowStyle2
            icon="material-symbols:attach-money"
            field="Investment Money"
            data={formatMoney(investorStatistics?.total_investment_money || 0)}
            bgColor="#CA443C"
            note={""}
            rate={0}
          />
        </Grid>
        <Grid item xs={4}>
          <RowStyle2
            icon="mdi:contract-outline"
            field="Contracts"
            data={investorStatistics?.number_of_contracts || 0}
            bgColor="#EC407A"
            note={""}
            rate={0}
          />
        </Grid>
        <Grid item xs={4}>
          <RowStyle2
            icon="charm:plant-pot"
            field="Projects Invested"
            data={investorStatistics?.number_investment_projects || 0}
            bgColor="#34A853"
            note={""}
            rate={0}
          />
        </Grid>
      </Grid>
    </Col>
  );
});

export default Statistics;
