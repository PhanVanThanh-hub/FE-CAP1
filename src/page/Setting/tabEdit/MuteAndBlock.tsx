import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Collapse,
  Divider,
  InputAdornment,
  Modal,
  OutlinedInput,
} from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import "animate.css";
import { TransitionGroup } from "react-transition-group";

interface Props {
  backMainTab: () => void;
}

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: "12px",
};

const BlockModal = ({ open, handleClose }: ModalProps) => {
  const [listBlocked, setListBlocked] = useState<string[]>([
    "Son Ngo",
    "Son Ngo1",
    "Son Ngo2",
    "Son Ngo3",
  ]);

  const handleUnblock = (user: string) => {
    setListBlocked(listBlocked.filter((userBlocked) => userBlocked !== user));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Col sx={{ padding: "20px 30px", ...style }}>
        <OutlinedInput
          sx={{
            borderRadius: "26px",
            height: "2.25em",
            fontSize: "1rem",
            input: {
              paddingLeft: "5px",
              "&::placeholder": {
                fontSize: "14px",
              },
            },
          }}
          id="outlined-adornment-weight"
          startAdornment={
            <InputAdornment position="end">
              <Icon
                icon="flat-color-icons:search"
                color="rgba(8, 232, 52, 0.8)"
              />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Enter a person's name"
        />
        <Text sx={{ margin: "10px 0px", color: "rgba(0,0,0,0.6)" }}>
          When you block someone, that person won't be able to follow, make
          friend with you or message you and you won't see notifications from
          them either.
        </Text>
        <Col sx={{ maxHeight: "300px", overflowY: "auto" }}>
          <TransitionGroup>
            {listBlocked.map((user: string) => {
              return (
                <Collapse>
                  <Row
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "5px 0px",
                    }}
                  >
                    <Row sx={{ alignItems: "center" }}>
                      <Avatar />
                      <Text sx={{ marginLeft: "10px" }}>{user}</Text>
                    </Row>
                    <Row
                      onClick={() => handleUnblock(user)}
                      sx={{
                        borderRadius: "12px",
                        backgroundColor: "rgba(145,199,136,0.4)",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      <Text sx={{ color: "#52734D" }}>Unblock</Text>
                    </Row>
                  </Row>
                </Collapse>
              );
            })}
          </TransitionGroup>
        </Col>
      </Col>
    </Modal>
  );
};

const MuteAndBlock = ({ backMainTab }: Props) => {
  const [isOpenBlockModal, setIsOpenModalBlock] = useState<boolean>(false);

  const handleCloseBlockModal = () => {
    setIsOpenModalBlock(false);
  };
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Mute & Block
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />

      <Row
        sx={{
          marginTop: "10px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>Blocked Account</Text>
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
          onClick={() => setIsOpenModalBlock(true)}
        >
          <Icon icon="ci:edit" />
          <Text sx={{ color: "#52734D", marginLeft: "10px" }}>Edit</Text>
        </Row>
      </Row>
      <Row
        sx={{
          marginTop: "10px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>Account are muted</Text>
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
          onClick={() => setIsOpenModalBlock(true)}
        >
          <Icon icon="ci:edit" />
          <Text sx={{ color: "#52734D", marginLeft: "10px" }}>Edit</Text>
        </Row>
      </Row>
      <BlockModal open={isOpenBlockModal} handleClose={handleCloseBlockModal} />
    </Col>
  );
};

export default MuteAndBlock;
