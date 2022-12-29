import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { PRIVATE_AND_SAFE } from "../../../constants";
import DirectMessages from "../tabEdit/DirectMessages";
import ContentYouSee from "../tabEdit/ContentYouSee";
import LocationInformation from "../tabEdit/LocationInformation";
import MuteAndBlock from "../tabEdit/MuteAndBlock";

const PrivateandSafe = () => {
  const [activeTab, setTabEdit] = useState<string>("main");

  return (
    <Box>
      <Row sx={{ justifyContent: "center", height: "100%" }}>
        <Col sx={{ width: "70%", marginTop: "80px" }}>
          {activeTab === "main" && (
            <Col>
              {PRIVATE_AND_SAFE.map((value) => {
                return (
                  <Col key={value.key} sx={{ marginBottom: "20px" }}>
                    <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                      {value.name}
                    </Text>
                    <Divider
                      sx={{ margin: "10px 0px", borderColor: "divider" }}
                    />
                    {value.options.map((option) => {
                      return (
                        <Row
                          key={option.key}
                          sx={{
                            alginItems: "center",
                            justifyContent: "space-between",
                            margin: "5px 0px",
                          }}
                        >
                          <Text>{option.name}</Text>
                          <Row
                            sx={{
                              alignItems: "center",
                              justifyContent: "flex-end",
                              cursor: "pointer",
                            }}
                            onClick={() => setTabEdit(option.value)}
                          >
                            <UiIcon icon="ci:edit" size="16" />
                            <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                          </Row>
                        </Row>
                      );
                    })}
                  </Col>
                );
              })}
            </Col>
          )}
          {activeTab === "directMessages" && (
            <DirectMessages backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "contentYouSee" && (
            <ContentYouSee backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "location" && (
            <LocationInformation backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "muteAndBlock" && (
            <MuteAndBlock backMainTab={() => setTabEdit("main")} />
          )}
        </Col>
      </Row>
    </Box>
  );
};

export default PrivateandSafe;
