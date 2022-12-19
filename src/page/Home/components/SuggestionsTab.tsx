import React from "react";
import { Avatar, Box, Popover, SxProps } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR } from "../../../constants";
import { useHistory } from "react-router-dom";

interface PopoverProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const RowStyle: SxProps = {
  width: "2.75em",
  height: "1.75em",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  marginRight: "5px",
};

const PopoverSwitchAccount = ({ open, anchorEl, onClose }: PopoverProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Col
        sx={{
          padding: "10px 15px",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <Col>
          <Row sx={{ alignItems: "center", cursor: "pointer" }}>
            <Avatar sx={{ width: "40px", height: "40px" }} />
            <Row
              sx={{
                marginLeft: "10px",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text>Elian</Text>
              <UiIcon icon="akar-icons:check" size="14px" />
            </Row>
          </Row>
          <Row>
            <Box sx={{ width: "40px", height: "40px" }}></Box>
            <Col sx={{ marginLeft: "10px" }}>
              <Text sx={{ cursor: "pointer" }}>Add the other account</Text>
              <Text sx={{ cursor: "pointer", marginTop: "5px" }}>
                Sign out @Elian
              </Text>
            </Col>
          </Row>
        </Col>
      </Col>
    </Popover>
  );
};

const SuggestionsTab = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isOpenPopover = Boolean(anchorEl);

  return (
    <Col
      sx={{
        width: "100%",
        paddingTop: "50px",
        maxWidth: 260,
        right: "0",
        position: "fixed",
        height: "100vh",
        color: "white",
        p: "0px 15Dpx",
        alignItems: "center",
      }}
    >
      <Row sx={{ width: "100%", alignItems: "center" }}>
        <Row
          sx={{
            backgroundColor: COLOR.icon.paper,
            border: `1px solid ${COLOR.icon.border}`,
            ...RowStyle,
          }}
        >
          <UiIcon icon="ci:message-writing" size="19" />
        </Row>
        <Row
          sx={{
            backgroundColor: COLOR.icon.paper,
            border: `1px solid ${COLOR.icon.border}`,
            ...RowStyle,
          }}
        >
          <UiIcon icon="clarity:notification-outline-badged" size="19" />
        </Row>
        <Row
          sx={{
            backgroundColor: "background.paper",
            width: "40%",
            padding: "5px 20px",
            borderRadius: "32px",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          <Row
            onClick={() => history.push("/me")}
            sx={{ alignItems: "center" }}
          >
            <Avatar sx={{ bgcolor: "red", width: "1.25em", height: "1.25em" }}>
              N
            </Avatar>
            <Text fontSize="caption" ml="10px">
              Elian
            </Text>
          </Row>
          <UiIcon icon="bx:dots-horizontal-rounded" onClick={handleClick} />
          <PopoverSwitchAccount
            open={isOpenPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
          />
        </Row>
      </Row>
      <Col
        sx={{
          height: "100%",
          width: "100%",
          marginTop: "20px",
          color: "black",
          p: "20px",
        }}
      >
        <Text fontSize="subtitle2">Suggestions for you</Text>
        <Text fontSize="body1" sx={{ marginTop: "10px" }}>
          #The Start-up Website
        </Text>
        <Text sx={{ marginTop: "10px" }}>
          Website for the startup community that aids.......
        </Text>
      </Col>
    </Col>
  );
};

export default SuggestionsTab;
