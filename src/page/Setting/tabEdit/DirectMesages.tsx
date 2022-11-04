import { Icon } from "@iconify/react";
import { Divider, Switch } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { makeStyles } from "@mui/styles";

import "animate.css";

interface Props {
  backMainTab: () => void;
}

const useStyles = makeStyles((theme: any) => ({
  switch_track: {
    backgroundColor: "rgba(145,199,136)",
  },
  switch_base: {
    color: "white",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#52734D",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#91C788",
    },
  },
}));

const DirectMessages = ({ backMainTab }: Props) => {
  const classes = useStyles();

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Direct Messages
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
      <Col sx={{ marginBottom: "20px" }}>
        <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
            Allow pending messages from everyone
          </Text>
          <Switch
            defaultChecked
            classes={{
              track: classes.switch_track,
              switchBase: classes.switch_base,
            }}
          />
        </Row>
        <Text sx={{ marginTop: "10px" }}>
          Tell people you don't follow to send you pending messages and add you
          to group chats. To reply to their message, you need to accept this
          pending message
        </Text>
      </Col>
      <Col>
        <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
            Show reading report
          </Text>
          <Switch
            defaultChecked
            classes={{
              track: classes.switch_track,
              switchBase: classes.switch_base,
            }}
          />
        </Row>
        <Text sx={{ marginTop: "10px" }}>
          Notify the people you're messaging when you've seen their messages.
          Read confirmation will not be displayed on pending messages.
        </Text>
      </Col>
    </Col>
  );
};

export default DirectMessages;
