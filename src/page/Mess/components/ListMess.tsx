import React from "react";
import {
  Avatar,
  Badge,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { InputField } from "../../../components/FormControl";
import { styled } from "@mui/material/styles";
import { LIST_CHAT } from "../../../constants";
import UiScrollBar from "../../../components/elements/UiScrollBar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ListMess = () => {
  return (
    <Col
      sx={{ alginItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Col
        sx={{
          height: "95vh",
          backgroundColor: "background.paper",
          borderRadius: "24px",
        }}
      >
        <Col sx={{ padding: "0px 20px" }}>
          <Row sx={{ alignItems: "center", marginTop: "20px" }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#44b700",
                  color: "#44b700",
                },
              }}
            >
              <Avatar />
            </StyledBadge>
            <Text sx={{ marginLeft: "10px", fontWeight: "bold" }}>
              John Doe
            </Text>
          </Row>
          <Row>
            <FormControl
              sx={{
                width: "90%",
                marginTop: "20px",
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
                startAdornment={
                  <InputAdornment position="end">
                    <UiIcon icon="ant-design:search-outlined" />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Search"
              />
            </FormControl>
          </Row>
        </Col>

        <Col
          sx={{
            marginTop: "30px",
            height: "85%",
          }}
        >
          <UiScrollBar>
            <Col sx={{ padding: "0px 20px" }}>
              {LIST_CHAT.map((chat) => {
                return (
                  <Col key={chat.key}>
                    <Row
                      sx={{
                        margin: "15px 0px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Row>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                          sx={{
                            "& .MuiBadge-badge": {
                              backgroundColor: chat.status
                                ? "rgb(213, 76, 72)"
                                : "success.main",
                              color: chat.status
                                ? "rgb(213, 76, 72)"
                                : "success.main",
                            },
                          }}
                        >
                          <Avatar />
                        </StyledBadge>
                        <Col sx={{ marginLeft: "10px" }}>
                          <Text>{chat.name}</Text>
                          <Text>{chat.lastMess}</Text>
                        </Col>
                      </Row>

                      <Col sx={{ alignItems: "flex-end" }}>
                        <Text>{chat.time}</Text>
                        {chat.notify > 0 && (
                          <Row
                            sx={{
                              height: "22px",
                              width: "22px",
                              backgroundColor: "red",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                            }}
                          >
                            <Text fontSize="caption">{chat.notify}</Text>
                          </Row>
                        )}
                      </Col>
                    </Row>
                    <Divider />
                  </Col>
                );
              })}
            </Col>
          </UiScrollBar>
        </Col>
      </Col>
    </Col>
  );
};

export default ListMess;
