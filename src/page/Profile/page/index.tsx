import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row } from "../../../components/elements";
import Post from "../../../components/shared/Post";
import { fetchProfile } from "../../../redux/auth/authSlice";
import { ParamsProps } from "../../../types/models/app";
import CreatePost from "../../Home/components/CreatePost";
import Header from "../components/Header";
import Information from "../components/Information";
import Introduce from "../components/Introduce";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<ParamsProps>();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProfile({ user_id: id }));
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <Col
      sx={{
        backgroundColor: "background.default",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Col sx={{ width: "90%", paddingTop: "20px" }}>
        <Row sx={{ padding: "10px 0px" }} />
        <Information />
        <Row sx={{ padding: "10px 0px" }} />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item md={5}>
            <Introduce />
          </Grid>
          <Grid item md={7}>
            <CreatePost />
            {/* <Post /> */}
          </Grid>
        </Grid>
      </Col>
    </Col>
  );
};

export default ProfilePage;
