import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import {
  Col,
  Row,
  Text,
  UiIcon,
  UiInputField,
} from "../../components/elements";
import { fetchSearch, selectListUser } from "../../redux/auth/authSlice";
import Header from "./Header";

const SearchPage = () => {
  const listUser = useSelector(selectListUser);

  return (
    <Col
      sx={{
        backgroundColor: "background.default",
        alignItems: "center",
        paddingBottom: "100px",
        minHeight: "100vh",
      }}
    >
      <Col sx={{ width: "90%", paddingTop: "20px" }}>
        <Header />

        <Row sx={{ paddingTop: "20px" }} />
        <Grid container spacing={2}>
          {listUser.map((user) => {
            return (
              <Grid item key={user.id} md={3}>
                <Col
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: "12px",
                  }}
                >
                  <Col sx={{ alignItems: "center", padding: "30px 0px 0px" }}>
                    <Avatar
                      src={user.avatar}
                      sx={{ width: "100px", height: "100px" }}
                    />
                    <Text
                      fontSize="body2"
                      sx={{ paddingTop: "10px", fontWeight: "bold" }}
                    >
                      {user.name}
                    </Text>
                  </Col>
                  <Col sx={{ padding: "5px 20px" }}>
                    <Row sx={{ alignItems: "center", padding: "5px 0px" }}>
                      <UiIcon
                        icon="material-symbols:location-on-outline"
                        size="30"
                      />
                      <Text sx={{ paddingLeft: "5px" }}>098 2819 8219</Text>
                    </Row>
                    <Row sx={{ alignItems: "center", padding: "5px 0px" }}>
                      <UiIcon
                        icon="material-symbols:location-on-outline"
                        size="30"
                      />
                      <Text sx={{ paddingLeft: "5px" }}>098 2819 8219</Text>
                    </Row>
                    <Row sx={{ alignItems: "center", padding: "5px 0px" }}>
                      <UiIcon
                        icon="material-symbols:location-on-outline"
                        size="30"
                      />
                      <Text sx={{ paddingLeft: "5px" }}>098 2819 8219</Text>
                    </Row>
                  </Col>
                </Col>
              </Grid>
            );
          })}
        </Grid>
      </Col>
    </Col>
  );
};

export default SearchPage;
