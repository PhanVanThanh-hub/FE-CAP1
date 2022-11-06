import React, { useState } from "react";
import { Divider, Slide } from "@mui/material";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiIcon,
  UiSwitch,
} from "../../../components/elements";
import "animate.css";
import { AREAS_OF_CONCERN } from "../../../constants";

interface Props {
  backMainTab: () => void;
}

const ContentYouSee = ({ backMainTab }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Content You See
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text>Areas of concern</Text>
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        >
          <UiIcon icon="ci:edit" />
          <Text sx={{ marginLeft: "10px" }}>Edit</Text>
        </Row>
      </Row>
      <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text>Hide sensitive content</Text>
        <UiSwitch />
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Slide
        in={isOpen}
        direction="up"
        style={{ transformOrigin: "0 0 0" }}
        {...(isOpen ? { timeout: 1000 } : {})}
      >
        <div>
          <Col
            sx={{
              borderRadius: "24px",
              padding: "10px 20px",
              backgroundColor: "background.paper",
              boxShadow:
                "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
            }}
          >
            <Text
              fontSize="body1"
              sx={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
            >
              Areas of concern
            </Text>
            {AREAS_OF_CONCERN.map((concern) => {
              return (
                <Row
                  key={concern.key}
                  sx={{
                    margin: "5px 0px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{concern.name}</Text>
                  <UiSwitch />
                </Row>
              );
            })}
            <Row
              sx={{
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Row>
                <UiButton>Save</UiButton>
              </Row>
              <Row sx={{ marginLeft: "20px" }}>
                <UiButton
                  variant="contained"
                  onClick={() => setIsOpen(false)}
                  backgroundColor="transparent"
                  backgroundColorHover="transparent"
                  color="black"
                  colorHover="black"
                >
                  Cancel
                </UiButton>
              </Row>
            </Row>
          </Col>
        </div>
      </Slide>
    </Col>
  );
};

export default ContentYouSee;
