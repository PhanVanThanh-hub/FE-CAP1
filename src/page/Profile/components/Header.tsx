import React from "react";
import { Col, Row, UiIcon, Text } from "../../../components/elements";
import logo from "../../../assets/image/logo.png";
import { Avatar, CardMedia, Popover, SxProps, Box } from "@mui/material";
import { COLOR } from "../../../constants";

interface PopoverProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const RowStyle: SxProps = {
  width: "2.75em",
  height: "2.75em",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  marginRight: "10px",
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
          <Row sx={{ alignItems: "center" }}>
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

const Header = () => {
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
    <Row
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "24px",
      }}
    >
      <Row
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px 20px",
        }}
      >
        <Row>
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            style={{ width: "30%" }}
          />
        </Row>
        <Row sx={{ alignItems: "center" }}>
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
          <Avatar onClick={handleClick} sx={{ cursor: "pointer" }} />
          <PopoverSwitchAccount
            open={isOpenPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
          />
        </Row>
      </Row>
    </Row>
  );
};

export default Header;
