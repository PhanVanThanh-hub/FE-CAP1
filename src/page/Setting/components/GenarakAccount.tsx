import React, { useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import ChangeName from "../tabEdit/ChangeName";
import ChangePassword from "../tabEdit/ChangePassword";
import ChangePhone from "../tabEdit/ChangePhone";
import ChangeRole from "../tabEdit/ChangeRole";

const GeneralAccount = () => {
  const [activeTab, setTabEdit] = useState<string>("main");

  return (
    <Box>
      <Row sx={{ justifyContent: "center", height: "100%" }}>
        <Col sx={{ width: "70%", marginTop: "80px" }}>
          {activeTab === "main" && (
            <Col>
              <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
              <Grid container sx={{ width: "100%" }} spacing={2}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Text>Name</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text>Elian</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Row
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                        onClick={() => setTabEdit("changeName")}
                      >
                        <UiIcon icon="ci:edit" size="16" />
                        <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                      </Row>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Text>Password</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text>****</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Row
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                        onClick={() => setTabEdit("changePassword")}
                      >
                        <UiIcon icon="ci:edit" size="16" />
                        <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                      </Row>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Text>Role</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text></Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Row
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                        onClick={() => setTabEdit("changeRole")}
                      >
                        <UiIcon icon="ci:edit" size="16" />
                        <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                      </Row>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Text>Email</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text>trquangg2431@gamil.com</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Row
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                        onClick={() => setTabEdit("changeEmail")}
                      >
                        <UiIcon icon="ci:edit" size="16" />
                        <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                      </Row>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Text>Phone</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Text>093210932103</Text>
                    </Grid>
                    <Grid item xs={4}>
                      <Row
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                        onClick={() => setTabEdit("changePhone")}
                      >
                        <UiIcon icon="ci:edit" size="16" />
                        <Text sx={{ marginLeft: "10px" }}>Edit</Text>
                      </Row>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
            </Col>
          )}
          {activeTab === "changeName" && (
            <ChangeName backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "changePassword" && (
            <ChangePassword backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "changeRole" && (
            <ChangeRole backMainTab={() => setTabEdit("main")} />
          )}
          {activeTab === "changePhone" && (
            <ChangePhone backMainTab={() => setTabEdit("main")} />
          )}
        </Col>
      </Row>
    </Box>
  );
};

export default GeneralAccount;
