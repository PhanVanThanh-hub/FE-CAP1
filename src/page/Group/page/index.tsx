import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row } from "../../../components/elements";
import { fetchGroupDetail, selectGroup } from "../../../redux/group/groupSlice";
import { ParamsProps } from "../../../types/models/app";
import Header from "../../Profile/components/Header";
import Banner from "../components/Banner";
import GroupName from "../components/Groupname";
import Introduce from "../components/Introduce";
import MemberList from "../components/Member";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const GroupPage = () => {
  const params = useParams<ParamsProps>();
  const { id } = params;
  const [tab, setTab] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const group = useSelector(selectGroup);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchGroupDetail({ id }));
    };
    fetchData();
  }, [dispatch, id]);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  return (
    <Col
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        paddingBottom: "200px",
      }}
    >
      <Header />
      <Grid container>
        <Grid item xs={3}>
          <Col></Col>
          <GroupName />
        </Grid>
        <Grid item xs={9}>
          <Col sx={{ backgroundColor: "background.default" }}>
            <Row sx={{ marginTop: "80px" }} />
            <Banner handleChange={handleChange} tab={tab} group={group} />
            <Row sx={{ margin: "20px 0px" }} />

            <TabPanel value={tab} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={7}></Grid>
                <Grid item xs={5}>
                  <Introduce group={group} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Col sx={{ alignItems: "center" }}>
                <MemberList />
              </Col>
            </TabPanel>
          </Col>
        </Grid>
      </Grid>
    </Col>
  );
};

export default GroupPage;
