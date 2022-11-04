import { Icon } from "@iconify/react";
import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import { Row, Col, Text } from "../../../components/elements";
import EmailNotifications from "../tabEdit/EmailNotifications";
import PushNotifications from "../tabEdit/PushNotifications";

const Notify = () => {
  const [activeTab, setTabEdit] = useState<string>("main");

  return (
    <Box>
      <Row sx={{ justifyContent: "center", height: "100%" }}>
        <Col sx={{ width: "70%", marginTop: "80px" }}>
          {activeTab === "main" && (
            <Col>
              <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
              <Row sx={{ margin: "10px 0px", justifyContent: "space-between" }}>
                <Text>Push notifications</Text>
                <Row
                  sx={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                  }}
                  onClick={() => setTabEdit("push")}
                >
                  <Icon icon="ci:edit" />
                  <Text sx={{ color: "#52734D", marginLeft: "10px" }}>
                    Edit
                  </Text>
                </Row>
              </Row>
              <Row sx={{ margin: "10px 0px", justifyContent: "space-between" }}>
                <Text>Email notifications</Text>
                <Row
                  sx={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                  }}
                  onClick={() => setTabEdit("email")}
                >
                  <Icon icon="ci:edit" />
                  <Text sx={{ color: "#52734D", marginLeft: "10px" }}>
                    Edit
                  </Text>
                </Row>
              </Row>

              <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
            </Col>
          )}
          {activeTab === "push" && (
            <PushNotifications backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "email" && (
            <EmailNotifications backMainTab={() => setTabEdit("main")} />
          )}
        </Col>
      </Row>
    </Box>
  );
};

export default Notify;
