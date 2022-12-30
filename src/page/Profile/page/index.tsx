import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "../../../components/elements";
import Post from "../../../components/shared/Post";
import CreatePost from "../../Home/components/CreatePost";
import Header from "../components/Header";
import Information from "../components/Information";
import Introduce from "../components/Introduce";

const ProfilePage = () => {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/post/')
      .then(res => setListPost(res.data))
      .catch(error => console.log(error))
  }, [])
  return (
    <Col
      sx={{
        backgroundColor: "background.default",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <Col sx={{ width: "90%", paddingTop: "20px" }}>
        <Header />
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
            {
            listPost.map((postData: { id: any; image: any; author: any; create_at:any; num_comment:any}) => { 
             return (
             <Post key={postData.id} postData={postData}/>)
            })
            }

          </Grid>
        </Grid>
      </Col>
    </Col>
  );
};

export default ProfilePage;
