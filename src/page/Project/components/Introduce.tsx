import { Avatar, Grid } from "@mui/material";
import React from "react";
import { Col, Row, Text, UiButton } from "../../../components/elements";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { COLOR } from "../../../constants";

const TimelineSeparatorStyle = () => {
  return (
    <TimelineSeparator>
      <TimelineDot sx={{ backgroundColor: COLOR.icon.primary }} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

const Introduce = () => {
  return (
    <Col>
      <Grid container>
        <Grid item xs={8}>
          <Col>
            <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
              Introduce
            </Text>
            <Text sx={{ margin: "20px 0px" }}>
              Currently, young start-ups appear a lot with new and attractive
              projects, but along with new projects is the cost and capital to
              develop that project successfully, so in addition to the start-up
              having a stable source of capital for the project, some start-ups
              will go to call for capital from investors, and calling for
              investors has many ways: direct contact with investors, or through
              fundraising platforms or social networking sites.
            </Text>
            <Row>
              <UiButton>See More</UiButton>
            </Row>
            <Col>
              <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                Contact Info
              </Text>
              <Col
                sx={{
                  marginTop: "10px",
                  "& .MuiBox-root": { alignItems: "center", margin: "5px 0px" },
                }}
              >
                <Row>
                  <Text sx={{ width: "30%" }}>Full name</Text>
                  <Text>The community startups website</Text>
                </Row>
                <Row>
                  <Text sx={{ width: "30%" }}>Abbreviations</Text>
                  <Text>CSW</Text>
                </Row>
                <Row>
                  <Text sx={{ width: "30%" }}>Email</Text>
                  <Text>csw_startups@gmail.com</Text>
                </Row>
                <Row>
                  <Text sx={{ width: "30%" }}>Website</Text>
                  <Text>https://cswstartups.vn</Text>
                </Row>
              </Col>
            </Col>
          </Col>
        </Grid>
        <Grid item xs={4}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparatorStyle />
              <TimelineContent>
                <Col>
                  <Text sx={{ fontWeight: "bold" }}>Representative</Text>
                  <Row sx={{ marginTop: "10px" }}>
                    <Avatar />
                    <Col sx={{ marginLeft: "10px" }}>
                      <Text>Esther Howard</Text>
                      <Text>CEO</Text>
                    </Col>
                  </Row>
                </Col>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparatorStyle />
              <TimelineContent>
                <Col>
                  <Text sx={{ fontWeight: "bold" }}>Category</Text>
                  <Text fontSize="caption" sx={{ marginTop: "10px" }}>
                    Education
                  </Text>
                </Col>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparatorStyle />
              <TimelineContent>
                <Col>
                  <Text sx={{ fontWeight: "bold" }}>Establish</Text>
                  <Text fontSize="caption" sx={{ marginTop: "10px" }}>
                    08/2022
                  </Text>
                </Col>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Col>
  );
};

export default Introduce;
