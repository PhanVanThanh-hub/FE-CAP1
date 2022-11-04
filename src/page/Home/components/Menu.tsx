import { Icon, IconProps } from "@iconify/react";
import {
  Avatar,
  Box,
  iconButtonClasses,
  Popover,
  SxProps,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Text } from "../../../components/elements";
import { MENU_ITEM } from "../../../constants";

interface MenuChildrenProps {
  icon: any;
  title: string;
  url: string;
}

interface PopoverProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const RowStyle: SxProps = {
  width: "3.75em",
  height: "3.75em",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
};

const PopoverSwitchAccount = ({ open, anchorEl, onClose }: PopoverProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{ position: "absolute", top: "-25px" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
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
              }}
            >
              <Text>Elian</Text>
              <Icon icon="akar-icons:check" color="rgba(8, 232, 52, 0.8)" />
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

const MenuChildren = ({ icon, title, url }: MenuChildrenProps) => {
  const history = useHistory();

  return (
    <Row
      onClick={() => history.push(url)}
      sx={{ alignItems: "center", marginTop: "10px", cursor: "pointer" }}
    >
      <Row
        sx={{
          backgroundColor: "white",
          border: "1px solid rgba(82, 115, 77, 1)",
          ...RowStyle,
        }}
      >
        <Icon icon={icon} width="30" height="30" color="rgba(82, 115, 77, 1)" />
      </Row>
      <Text ml="20px" fontSize="body2" color="black">
        {title}
      </Text>
    </Row>
  );
};

const Menu = () => {
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
        maxWidth: 260,
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
        color: "white",
        pl: "30px",
      }}
    >
      <Col sx={{ height: "100%", justifyContent: "space-around" }}>
        <Col>
          <Row sx={{ alignItems: "center" }}>
            <Row
              sx={{
                backgroundColor: "#52734D",
                borderRadius: "16px",
                ...RowStyle,
              }}
            >
              <Icon icon="ant-design:home-outlined" width="30" height="30" />
            </Row>
            <Text ml="20px" fontSize="body2">
              Home Page
            </Text>
          </Row>
          <Row sx={{ margin: "20px 0px" }}>
            <Row
              sx={{
                backgroundColor: "white",
                width: "70%",
                padding: "5px 20px",
                borderRadius: "32px",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Text fontSize="body1" color="black" ml="10px">
                Elian
              </Text>
            </Row>
          </Row>
          {MENU_ITEM.map((item) => {
            return (
              <MenuChildren
                title={item.title}
                icon={item.icon}
                url={item.url}
              />
            );
          })}
        </Col>
        <Row
          sx={{
            margin: "10px 0px",
          }}
        >
          <Row
            sx={{
              backgroundColor: "white",
              width: "70%",
              padding: "5px 20px",
              borderRadius: "32px",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Row sx={{ alignItems: "center" }}>
              <Avatar
                sx={{ bgcolor: "red", width: "1.25em", height: "1.25em" }}
              >
                N
              </Avatar>
              <Text fontSize="caption" color="black" ml="10px">
                Elian
              </Text>
            </Row>
            <Icon
              icon="bx:dots-horizontal-rounded"
              width="25"
              height="25"
              color="black"
              onClick={handleClick}
            />
            <PopoverSwitchAccount
              open={isOpenPopover}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
            />
          </Row>
        </Row>
      </Col>
    </Col>
  );
};

export default Menu;
