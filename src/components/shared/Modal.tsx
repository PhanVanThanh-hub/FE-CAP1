import * as React from "react";
import { Col, Row, Text, UiModal } from "../elements";
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
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

interface Props {
  open: boolean;
  handleClose: any;
}

const IconStyled: any = {
  width: "24px",
  height: "24px",
  color: "#52734D",
  cursor: "pointer",
};

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} placement="top" classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(12, 7, 10, 0.8)",
    color: "white",
    fontSize: "0.95rem",
    padding: "10px 15px",
  },
}));

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
      <UiModal open={open} onClose={handleClose}>
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
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Icon icon="akar-icons:send" width="20" height="20" />
                </IconButton>
              </InputAdornment>
            }
          />
        </Row>
      </UiModal>
    </div>
  );
};

export const CreatePostModal = ({ open, handleClose }: Props) => {
  return (
    <div>
      <UiModal open={open} onClose={handleClose} padding="20px 30px">
        <Col>
          <Row sx={{ alignItems: "center", justifyContent: "center" }}>
            <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
              Create Post
            </Text>
          </Row>
          <Row sx={{ alignItems: "center" }}>
            <Avatar />
            <Text sx={{ marginLeft: "10px", fontWeight: "bold" }}>Elian</Text>
          </Row>
          <TextField
            placeholder="I'd like to say..."
            multiline
            sx={{
              overflowY: "auto",
              height: "200px",
              width: "100%",
              "& .MuiOutlinedInput-input": {
                fontSize: "1rem",
                lineHeight: "20px",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Row
              sx={{
                "& .MuiBox-root": {
                  marginRight: "20px",
                },
              }}
            >
              <Row>
                <StyledTooltip title="Add Image">
                  <Icon icon="gala:image" style={{ ...IconStyled }} />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Video/Audio">
                  <Icon icon="carbon:play-outline" style={{ ...IconStyled }} />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Feelings / Activity">
                  <Icon icon="bi:emoji-smile" style={{ ...IconStyled }} />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Location">
                  <Icon icon="gis:location-poi-o" style={{ ...IconStyled }} />
                </StyledTooltip>
              </Row>
            </Row>
            <Button
              sx={{
                backgroundColor: "#52734D",
                color: "white",
                borderRadius: "12px",
                padding: "5px 20px",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#52734D" },
              }}
            >
              Post
            </Button>
          </Row>
        </Col>
      </UiModal>
    </div>
  );
};
