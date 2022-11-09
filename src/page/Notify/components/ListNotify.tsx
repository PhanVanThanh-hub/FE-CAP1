import { Avatar, Divider } from "@mui/material";
import React from "react";
import { Col, Row, Text, UiButton, UiIcon } from "../../../components/elements";
import { COLOR } from "../../../constants";
import { NOTIFIES } from "../../../constants/notify";

const ListNotify = () => {
  return (
    <Col
      sx={{
        marginTop: "20px",
        backgroundColor: "background.paper",
        padding: "20px 10px",
        borderRadius: "20px",
      }}
    >
      <Col sx={{ padding: "0px 10px" }}>
        <Text fontSize="h6" sx={{ fontWeight: "bold" }}>
          Notify
        </Text>
        <Row>
          <UiButton>All</UiButton>
          <UiButton sx={{ marginLeft: "10px" }}>Unread</UiButton>
        </Row>
      </Col>

      <Col sx={{}}>
        <Col>
          {NOTIFIES.map((notify) => {
            return (
              <Col
                key={notify.key}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "12px",
                  padding: "10px 10px",
                  "&:hover": {
                    backgroundColor: "background.default",
                  },
                }}
              >
                <Col>
                  <Row
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Row sx={{ alignItems: "center" }}>
                      <Avatar />
                      <Col sx={{ marginLeft: "10px" }}>
                        <Text sx={{ fontWeight: "bold" }}>{notify.name}</Text>
                        <Text fontSize="caption">{notify.time}</Text>
                      </Col>
                    </Row>
                    <Row
                      sx={{
                        width: "30px",
                        height: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      {notify.status && (
                        <UiIcon icon="ci:dot-05-xl" color={COLOR.icon.onl} />
                      )}
                    </Row>
                  </Row>

                  <Text>{notify.notify}</Text>
                </Col>
              </Col>
            );
          })}
        </Col>
      </Col>
    </Col>
  );
};

export default ListNotify;
