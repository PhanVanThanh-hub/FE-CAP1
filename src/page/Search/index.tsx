import { Avatar, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Row, Text, UiIcon } from "../../components/elements";
import { selectListUser } from "../../redux/auth/authSlice";
import { formatPhoneNumber } from "../../until/helpers/functions";
import Header from "./Header";

const RowInformation = ({
  icon,
  content,
}: {
  icon: string;
  content: string;
}) => {
  return (
    <Row sx={{ alignItems: "center", padding: "5px 0px" }}>
      <UiIcon icon={icon} size="30" />
      <Text sx={{ paddingLeft: "5px" }}>{content}</Text>
    </Row>
  );
};

const SearchPage = () => {
  const history = useHistory();
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
          {!listUser.length && (
            <Row
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "50vh",
              }}
            >
              <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
                Type any keyword to find the person you want
              </Text>
            </Row>
          )}
          {listUser.map((user) => {
            return (
              <Grid
                item
                key={user.id}
                md={3}
                onClick={() => history.push(`/profile/${user.user.id}`)}
              >
                <Col
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: "12px",
                    cursor: "pointer",
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
                    <RowInformation
                      icon="ic:baseline-phone"
                      content={formatPhoneNumber(user.phone_number) || ""}
                    />
                    <RowInformation
                      icon="ic:baseline-email"
                      content={user.user.email}
                    />
                    <RowInformation
                      icon="mdi:user-box-outline"
                      content={user.role.name}
                    />
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
