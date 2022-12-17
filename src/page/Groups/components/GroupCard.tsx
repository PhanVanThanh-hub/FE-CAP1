import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Col, Text, UiIcon } from "../../../components/elements";
import { GroupApiItem } from "../../../types/models/groups";
import CreateGroupForm from "./CreateGroupForm";

interface Props {
  group: GroupApiItem;
}

const GroupCard = ({ group }: Props) => {
  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "12px",
        alignItems: "center",
        padding: "20px 0px",
        minHeight: "250px",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Avatar
        src={group.cover_image}
        sx={{
          height: "120px",
          width: "120px",
        }}
      />
      <Col sx={{ marginTop: "20px", alignItems: "center" }}>
        <Text fontSize="body1" sx={{ fontWeight: "bold", lineHeight: "40px" }}>
          {group.name}
        </Text>
        <Text>{group.total_member} member</Text>
      </Col>
    </Col>
  );
};

export const GroupCardCreate = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <Col>
      <Col
        onClick={() => setIsOpenModal(true)}
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "12px",
          alignItems: "center",
          padding: "20px 0px",
          minHeight: "250px",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <UiIcon icon="material-symbols:add-circle" size="120" />
        <Col sx={{ marginTop: "20px", alignItems: "center" }}>
          <Text
            fontSize="body1"
            sx={{ fontWeight: "bold", lineHeight: "40px" }}
          >
            Create Group
          </Text>
        </Col>
      </Col>
      <CreateGroupForm open={isOpenModal} handleClose={handleClose} />
    </Col>
  );
};

export default GroupCard;
