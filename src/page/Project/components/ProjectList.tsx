import React from "react";
import { Col, UiIcon, Text } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import ProjectDetailModal from "./ProjectDetail";

const ProjectList = () => {
  const { boolBag, setBoolBag } = useBoolBag({
    openModalProjectDetail: true,
  });
  const { openModalProjectDetail } = boolBag;

  const handleCloseProjectDetail = () => {
    setBoolBag({ openModalProjectDetail: false });
  };
  return (
    <Col
      sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <UiIcon icon="charm:plant-pot" size="300" />
      <Text fontSize="subtitle1">
        “If you want to go fast go alone, if you want to go far go together”
      </Text>
      <ProjectDetailModal
        open={openModalProjectDetail}
        handleClose={handleCloseProjectDetail}
      />
    </Col>
  );
};

export default ProjectList;
