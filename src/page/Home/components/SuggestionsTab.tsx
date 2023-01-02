import React from "react";
import { Avatar, SxProps, Tooltip } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR } from "../../../constants";
import { useHistory } from "react-router-dom";
import { removeUserCredential } from "../../../services/auth";

const RowStyle: SxProps = {
  width: "2.75em",
  height: "1.75em",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  marginRight: "5px",
};

const SuggestionsTab = () => {
  const history = useHistory();

  const handleLogout = async () => {
    removeUserCredential();
    history.replace("/");
    return window.location.reload();
  };

  return (
    <Col
      sx={{
        width: "100%",
        paddingTop: "50px",
        maxWidth: 260,
        right: "0",
        position: "fixed",
        height: "100vh",
        color: "white",
        p: "0px 15Dpx",
        alignItems: "center",
      }}
    >
      <Row sx={{ width: "100%", alignItems: "center" }}>
        <Row
          sx={{
            backgroundColor: COLOR.icon.paper,
            border: `1px solid ${COLOR.icon.border}`,
            ...RowStyle,
          }}
        >
          <UiIcon icon="ci:message-writing" size="19" />
        </Row>
        <Row
          sx={{
            backgroundColor: COLOR.icon.paper,
            border: `1px solid ${COLOR.icon.border}`,
            ...RowStyle,
          }}
        >
          <UiIcon icon="clarity:notification-outline-badged" size="19" />
        </Row>
        <Row
          sx={{
            backgroundColor: "background.paper",
            width: "40%",
            padding: "5px 20px",
            borderRadius: "32px",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          <Row
            onClick={() => history.push("/me")}
            sx={{ alignItems: "center" }}
          >
            <Avatar sx={{ bgcolor: "red", width: "1.25em", height: "1.25em" }}>
              N
            </Avatar>
            <Text fontSize="caption" ml="10px">
              Elian
            </Text>
          </Row>
          <Tooltip title="Log out">
            <div>
              <UiIcon icon="ooui:log-out-ltr" onClick={handleLogout} />
            </div>
          </Tooltip>
        </Row>
      </Row>
      <Col
        sx={{
          height: "100%",
          width: "100%",
          marginTop: "20px",
          color: "black",
          p: "20px",
        }}
      >
        <Text fontSize="subtitle2">Suggestions for you</Text>
        <Text fontSize="body1" sx={{ marginTop: "10px" }}>
          #The Start-up Website
        </Text>
        <Text sx={{ marginTop: "10px" }}>
          Website for the startup community that aids.......
        </Text>
      </Col>
    </Col>
  );
};

export default SuggestionsTab;
