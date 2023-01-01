import { Icon } from "@iconify/react";
import React from "react";
import { COLOR } from "../../constants";

interface Props {
  icon: string;
  onClick?: any;
  size?: string;
  color?: any;
}

export const UiIcon = ({
  icon,
  onClick,
  size = "24px",
  color = COLOR.icon.primary,
}: Props) => {
  return (
    <Icon
      icon={icon}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        color: color,
        cursor: "pointer",
      }}
    />
  );
};
