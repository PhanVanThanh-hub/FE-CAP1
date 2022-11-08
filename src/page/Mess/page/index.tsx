import React from "react";
import { Grid } from "@mui/material";
import { Col } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import Chat from "../components/Chat";
import Information from "../components/Information";
import ListMess from "../components/ListMess";

const MessagePage = () => {
  const { boolBag, setBoolBag } = useBoolBag({ openInformation: false });

  const { openInformation } = boolBag;

  return (
    <Col
      sx={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <Grid
        container
        columns={19}
        sx={{
          height: "100%",
          padding: "0px 20px",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={5} sx={{ height: "100%" }}>
          <ListMess />
        </Grid>
        <Grid item xs={openInformation ? 10 : 13}>
          <Chat setBoolBag={setBoolBag} openInformation={openInformation} />
        </Grid>
        {openInformation && (
          <Grid item xs={3}>
            <Information />
          </Grid>
        )}
      </Grid>
    </Col>
  );
};

export default MessagePage;
