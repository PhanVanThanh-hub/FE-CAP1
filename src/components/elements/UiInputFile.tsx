import React from "react";
import { Row, Text, UiIcon } from "./index";

interface Props {
  accept?: string;
  onChooseFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: any;
}

export const UiInputFile = ({
  onChooseFile,
  accept = ".html",
  sx,
  ...rest
}: Props) => {
  return (
    <Row
      sx={{
        cursor: "pointer",
        alignItems: "center",
        overflow: "hidden",
        pos: "relative",
        backgroundColor: "background.default",
        width: "80px",
        padding: "15px 10px",
        justifyContent: "center",
        ...sx,
      }}
    >
      <input
        type="file"
        accept={accept}
        style={{
          opacity: 0,
          position: "absolute",
          width: "100%",
          cursor: "pointer",
        }}
        onChange={(e) => onChooseFile(e)}
      />

      <UiIcon icon="material-symbols:upload-rounded" />
    </Row>
  );
};
