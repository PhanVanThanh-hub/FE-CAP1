import React, { useState } from "react";
import { Alert, Popover, Snackbar, SxProps } from "@mui/material";
import { Icon } from "@iconify/react";
import { Col, Row, Text } from "../elements";
import { SendMessModal } from "./Modal";

interface PopoverProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const ColItemStyles: SxProps = {
  "& .MuiBox-root": {
    alignItems: "center",
    marginBottom: "5px",
    cursor: "pointer",
    padding: "5px 15px",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "rgba(206, 198, 202, 0.8)",
    },
    "& .MuiTypography-root": {
      marginLeft: "10px",
    },
  },
};

const IconStyled: any = {
  width: "24px",
  height: "24px",
  color: "#52734D",
};

export const PopoverSharePost = ({ open, anchorEl, onClose }: PopoverProps) => {
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [isOpenModalShareMess, setIsOpenModalShareMess] =
    useState<boolean>(false);

  const handleCloseModalShareMess = () => {
    setIsOpenModalShareMess(false);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{ position: "absolute", top: "-10px", right: "0px" }}
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
          borderRadius: "24px",
          position: "relative",
        }}
      >
        <Col
          sx={{
            ...ColItemStyles,
          }}
        >
          <Row onClick={() => setIsOpenAlert(true)}>
            <Icon icon="akar-icons:copy" style={{ ...IconStyled }} />
            <Text>Copy link</Text>
          </Row>
          <Row onClick={() => setIsOpenModalShareMess(true)}>
            <Icon icon="fluent:mail-16-filled" style={{ ...IconStyled }} />
            <Text>Send via Direct Message</Text>
          </Row>
          <Row>
            <Icon icon="heroicons:user-group" style={{ ...IconStyled }} />
            <Text>Share to group</Text>
          </Row>
        </Col>
      </Col>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isOpenAlert}
        onClose={() => setIsOpenAlert(false)}
      >
        <Alert
          onClose={() => setIsOpenAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied!
        </Alert>
      </Snackbar>
      <SendMessModal
        open={isOpenModalShareMess}
        handleClose={handleCloseModalShareMess}
      />
    </Popover>
  );
};

export const PopoverMenuPost = ({ open, anchorEl, onClose }: PopoverProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{ position: "absolute", top: "30px", right: "0px" }}
      anchorOrigin={{
        vertical: "top",
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
          borderRadius: "24px",
          position: "relative",
        }}
      >
        <Col
          sx={{
            ...ColItemStyles,
          }}
        >
          <Row>
            <Icon icon="clarity:sad-face-line" style={{ ...IconStyled }} />
            <Text>Note interested in this post</Text>
          </Row>
          <Row>
            <Icon icon="fluent-mdl2:block-contact" style={{ ...IconStyled }} />
            <Text>Block Nguyen Tree</Text>
          </Row>
          <Row>
            <Icon icon="bi:volume-mute-fill" style={{ ...IconStyled }} />
            <Text>Mute Nguyen Tree </Text>
          </Row>
          <Row>
            <Icon icon="ic:outline-report" style={{ ...IconStyled }} />
            <Text>Report this port</Text>
          </Row>
        </Col>
      </Col>
    </Popover>
  );
};

export const PopoverMenuMyPost = ({
  open,
  anchorEl,
  onClose,
}: PopoverProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{ position: "absolute", top: "30px", right: "0px" }}
      anchorOrigin={{
        vertical: "top",
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
          borderRadius: "24px",
          position: "relative",
        }}
      >
        <Col
          sx={{
            ...ColItemStyles,
          }}
        >
          <Row>
            <Icon icon="clarity:sad-face-line" style={{ ...IconStyled }} />
            <Text>Note interested in this post</Text>
          </Row>
          <Row>
            <Icon icon="fluent:delete-20-filled" style={{ ...IconStyled }} />
            <Text>Remove post</Text>
          </Row>
        </Col>
      </Col>
    </Popover>
  );
};
