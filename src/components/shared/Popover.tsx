import React from "react";
import { Alert, Popover, Snackbar, SxProps } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../elements";
import { SendMessModal } from "./Modal";
import { useBoolBag } from "../../hooks";

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

export const PopoverSharePost = ({ open, anchorEl, onClose }: PopoverProps) => {
  const { boolBag, setBoolBag } = useBoolBag({
    openAlert: false,
    openModalShareMess: false,
  });
  const { openAlert, openModalShareMess } = boolBag;

  const handleCloseModalShareMess = () => {
    setBoolBag({ openModalShareMess: false });
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
          <Row onClick={() => setBoolBag({ openAlert: true })}>
            <UiIcon icon="akar-icons:copy" />
            <Text>Copy link</Text>
          </Row>
          <Row onClick={() => setBoolBag({ openModalShareMess: true })}>
            <UiIcon icon="fluent:mail-16-filled" />
            <Text>Send via Direct Message</Text>
          </Row>
          <Row>
            <UiIcon icon="heroicons:user-group" />
            <Text>Share to group</Text>
          </Row>
        </Col>
      </Col>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openAlert}
        onClose={() => setBoolBag({ openAlert: false })}
      >
        <Alert
          onClose={() => setBoolBag({ openAlert: false })}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied!
        </Alert>
      </Snackbar>
      <SendMessModal
        open={openModalShareMess}
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
            <UiIcon icon="clarity:sad-face-line" />
            <Text>Note interested in this post</Text>
          </Row>
          <Row>
            <UiIcon icon="fluent-mdl2:block-contact" />
            <Text>Block Nguyen Tree</Text>
          </Row>
          <Row>
            <UiIcon icon="bi:volume-mute-fill" />
            <Text>Mute Nguyen Tree </Text>
          </Row>
          <Row>
            <UiIcon icon="ic:outline-report" />
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
            <UiIcon icon="clarity:sad-face-line" />
            <Text>Note interested in this post</Text>
          </Row>
          <Row>
            <UiIcon icon="fluent:delete-20-filled" />
            <Text>Remove post</Text>
          </Row>
        </Col>
      </Col>
    </Popover>
  );
};
