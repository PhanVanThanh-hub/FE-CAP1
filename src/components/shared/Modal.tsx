import * as React from "react";
import { Col, Row, Text } from "../elements";
import { Icon } from "@iconify/react";
import {
  TextField,
  Modal,
  Divider,
  Avatar,
  Button,
  SxProps,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

interface Props {
  open: boolean;
  handleClose: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: "12px",
};

const ButtonStyled: SxProps = {
  color: "white",
  borderRadius: "12px",
  padding: "5px 20px",
  textTransform: "capitalize",
};

const ButtonSendStyle: SxProps = {
  ...ButtonStyled,
  backgroundColor: "#52734D",
  "&:hover": {
    backgroundColor: "#91C788",
  },
};

const ButtonSentStyled: SxProps = {
  backgroundColor: "#91C788",
  "&:hover": {
    backgroundColor: "#91C788",
  },
  ...ButtonStyled,
};

const InputProps: SxProps = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    fontSize: "16px",
    width: "90%",
    paddingLeft: "10px",
    backgroundColor: "rgba(221, 255, 188, 0.6)",
    input: {
      padding: "7px 10px",
    },
    "& fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
  },
};

export const SendMessModal = ({ open, handleClose }: Props) => {
  const [isSend, setIsSend] = React.useState<boolean>(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Col sx={style}>
          <Row sx={{ padding: "5px 20px", alignItems: "center" }}>
            <Icon
              icon="ci:close-big"
              width="30"
              height="30"
              cursor="pointer"
              onClick={handleClose}
            />
            <Text fontSize="subtitle2" sx={{ marginLeft: "10px" }}>
              Send via Direct Message
            </Text>
          </Row>
          <Row sx={{ padding: "5px 20px", alignItems: "center" }}>
            <Icon
              icon="fluent:search-24-regular"
              width="30"
              height="30"
              cursor="pointer"
            />
            <TextField
              placeholder="Looking for people"
              variant="standard"
              sx={{
                marginLeft: "10px",
                input: {
                  fontSize: "1rem",
                  "&::placeholder": {
                    fontSize: "14px",
                    paddingLeft: "0px",
                  },
                },
              }}
            />
          </Row>
          <Divider
            sx={{
              margin: "10px 0px",
              borderColor: "rgba(82, 115, 77, 0.6)",
            }}
          />
          <Col sx={{ padding: "5px 20px" }}>
            <Text sx={{ fontWeight: "bold" }}>Recently</Text>
            <Col sx={{ maxHeight: "300px", overflowY: "auto" }}>
              <Row sx={{ justifyContent: "space-between", margin: "10px 0px" }}>
                <Row sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Avatar />
                  <Text sx={{ marginLeft: "10px" }}>Elian</Text>
                </Row>
                {isSend ? (
                  <Button
                    sx={{
                      ...ButtonSentStyled,
                    }}
                  >
                    Sent
                  </Button>
                ) : (
                  <Button
                    sx={{
                      ...ButtonSendStyle,
                    }}
                    onClick={() => setIsSend(true)}
                  >
                    Send
                  </Button>
                )}
              </Row>
            </Col>
          </Col>
          <Col sx={{ padding: "5px 20px" }}>
            <Text sx={{ fontWeight: "bold" }}>Group chat</Text>
            <Col sx={{ maxHeight: "300px", overflowY: "auto" }}>
              <Row sx={{ justifyContent: "space-between", margin: "10px 0px" }}>
                <Row sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Avatar />
                  <Text sx={{ marginLeft: "10px" }}>Elian</Text>
                </Row>
                <Button
                  sx={{
                    ...ButtonSendStyle,
                  }}
                >
                  Send
                </Button>
              </Row>
            </Col>
          </Col>
          <Divider
            sx={{
              margin: "10px 0px",
              borderColor: "rgba(82, 115, 77, 0.6)",
            }}
          />
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              ...InputProps,
            }}
          >
            <OutlinedInput
              placeholder="Add a message"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Icon icon="akar-icons:send" width="20" height="20" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Row>
        </Col>
      </Modal>
    </div>
  );
};
