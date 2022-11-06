import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import { Row, Col, Text, UiIcon } from "../../../components/elements";
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
              <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
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
                  <UiIcon icon="ci:edit" />
                  <Text sx={{ marginLeft: "10px" }}>Edit</Text>
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
                  <UiIcon icon="ci:edit" />
                  <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                </Row>
              </Row>

              <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
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
