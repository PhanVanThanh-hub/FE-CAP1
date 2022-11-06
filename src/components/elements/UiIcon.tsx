import { Icon } from "@iconify/react";
import React from "react";
import { COLOR } from "../../constants";
import { Row } from "./Row";

interface Props {
  icon: string;
  onClick?: any;
  size?: string;
}

export const UiIcon = ({ icon, onClick, size = "24px" }: Props) => {
  return (
    <Row>
      <Icon
        icon={icon}
        onClick={onClick}
        style={{
          width: size,
          height: size,
          color: COLOR.icon.primary,
          cursor: "pointer",
        }}
      />
    </Row>
  );
};
