import React from "react";
import { Avatar, Divider, FormControl, OutlinedInput } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR } from "../../../constants";
import UiScrollBar from "../../../components/elements/UiScrollBar";

interface Props {
  setBoolBag: (item: { [key: string]: boolean }) => void;
  openInformation: boolean;
}

const Message = () => {
  return (
    <Row sx={{ alignItems: "end", margin: "5px 0px" }}>
      <Col
        sx={{
          backgroundColor: "background.default",
          padding: "10px 20px ",
          borderRadius: "12px",
        }}
      >
        <Text>Hi Good Morning!</Text>
        <Text
          fontSize="caption"
          sx={{ width: "100%", textAlign: "end", marginTop: "10px" }}
        >
          11:23 AM
        </Text>
      </Col>
      <Row
        sx={{
          backgroundColor: "white",
          height: "15px",
          width: "15px",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "2px",
        }}
      >
        <UiIcon icon="charm:tick" size="12" />
      </Row>
    </Row>
  );
};

const Chat = ({ setBoolBag, openInformation }: Props) => {
  return (
    <Col
      sx={{ alginItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Col
        sx={{
          height: "95vh",
          backgroundColor: "background.paper",
          borderRadius: "24px",
          padding: "0px 30px",
        }}
      >
        <Row
          sx={{
            marginTop: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Row>
            <Avatar />
            <Col sx={{ marginLeft: "10px" }}>
              <Row>
                <Text fontWeight="bold">Alene</Text>
                <UiIcon icon="ci:dot-02-s" color={COLOR.icon.onl} />
              </Row>
              <Text fontSize="caption">Last seen 2h ago</Text>
            </Col>
          </Row>
          <Row>
            <UiIcon
              icon="uiw:information"
              onClick={() => setBoolBag({ openInformation: !openInformation })}
            />
            <Row sx={{ marginLeft: "20px" }}>
              <UiIcon icon="bi:three-dots" />
            </Row>
          </Row>
        </Row>
        <Divider sx={{ margin: "20px 0px" }} />
        <UiScrollBar>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </UiScrollBar>
        <Row
          sx={{
            padding: "10px 0px",
            alignItems: "center",
          }}
        >
          <FormControl
            sx={{
              width: "90%",
              "& label.Mui-focused": {
                color: "button.primary",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "button.primary",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                fontSize: "16px",
                paddingLeft: "5px",
                "& fieldset": {
                  borderColor: "button.primary",
                },
                "&:hover fieldset": {
                  borderColor: "button.primary",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "button.primary",
                },
              },
            }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{
                borderRadius: "12px",
                height: "3em",
                fontSize: "1rem",
                backgroundColor: "transparent",

                input: {
                  paddingLeft: "12px",
                  "&::placeholder": {
                    fontSize: "14px",
                  },
                },
              }}
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="Type a message"
            />
          </FormControl>
          <Row sx={{ marginLeft: "50px" }}>
            <UiIcon icon="akar-icons:send" size="18" />
          </Row>
        </Row>
      </Col>
    </Col>
  );
};

export default Chat;
