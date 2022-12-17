import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Col } from "../../../components/elements";
import { fetchMyGroups, selectMyGroups } from "../../../redux/group/groupSlice";
import { GroupUserApiItem } from "../../../types/models/groups";
import Menu from "../../Home/components/Menu";
import GroupCard, { GroupCardCreate } from "../components/GroupCard";

const GroupListPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const myGroups = useSelector(selectMyGroups);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMyGroups({}));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Col sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      <Col>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Menu />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2} sx={{ marginTop: "80px" }}>
              <Grid item xs={3}>
                <GroupCardCreate />
              </Grid>
              {myGroups.map((groupUser: GroupUserApiItem) => {
                return (
                  <Grid
                    key={groupUser.id}
                    item
                    xs={3}
                    onClick={() => history.push(`group/${groupUser.group.id}`)}
                  >
                    <GroupCard group={groupUser.group} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Col>
    </Col>
  );
};

export default GroupListPage;
