import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Divider, Switch, Grow, Slide } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import { makeStyles } from "@mui/styles";

import "animate.css";
import { AREAS_OF_CONCERN } from "../../../constants";

interface Props {
  backMainTab: () => void;
}

const useStyles = makeStyles((theme: any) => ({
  switch_track: {
    backgroundColor: "rgba(145,199,136)",
  },
  switch_base: {
    color: "white",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#52734D",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#91C788",
    },
  },
}));

const ContentYouSee = ({ backMainTab }: Props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          Content You See
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
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
          <Icon icon="ci:edit" />
          <Text sx={{ color: "#52734D", marginLeft: "10px" }}>Edit</Text>
        </Row>
      </Row>
      <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text>Hide sensitive content</Text>
        <Switch
          defaultChecked
          classes={{
            track: classes.switch_track,
            switchBase: classes.switch_base,
          }}
        />
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
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
                  <Switch
                    defaultChecked
                    classes={{
                      track: classes.switch_track,
                      switchBase: classes.switch_base,
                    }}
                  />
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
                <Button
                  sx={{
                    backgroundColor: "#52734D",
                    color: "white",
                    borderRadius: "12px",
                    padding: "5px 20px",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "#52734D" },
                  }}
                >
                  Save
                </Button>
              </Row>
              <Row sx={{ marginLeft: "20px" }}>
                <Button
                  variant="contained"
                  onClick={() => setIsOpen(false)}
                  sx={{
                    margin: "10px 0px",
                    backgroundColor: "transparent",
                    color: "black",
                    borderRadius: "12px",
                    padding: "5px 20px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Row>
            </Row>
          </Col>
        </div>
      </Slide>
    </Col>
  );
};

export default ContentYouSee;
