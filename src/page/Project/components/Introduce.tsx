import { Avatar, Grid, Link } from "@mui/material";
import React from "react";
import { Col, Row, Text, UiButton } from "../../../components/elements";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { COLOR } from "../../../constants";
import { ProjectDetailApiItem } from "../../../types/models/projects";
import { formatShortDateTime } from "../../../until/helpers";
import { formatPhoneNumber } from "../../../until/helpers/functions";

interface Props {
  project: ProjectDetailApiItem;
}

const TimelineSeparatorStyle = () => {
  return (
    <TimelineSeparator>
      <TimelineDot sx={{ backgroundColor: COLOR.icon.primary }} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

const Introduce = ({ project }: Props) => {
  const {
    abbreviations,
    email,
    phone_number,
    website,
    project_owner,
    project_owner_position,
    category,
    establish,
  } = project;
  return (
    <Col>
      <Grid container>
        <Grid item xs={8}>
          <Col>
            <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
              Introduce
            </Text>
            <Text sx={{ margin: "20px 0px" }}>{project.introduce} </Text>
            {/* <Row>
              <UiButton>See More</UiButton>
            </Row> */}
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
                {abbreviations && (
                  <Row>
                    <Text sx={{ width: "30%" }}>Abbreviations</Text>
                    <Text>{abbreviations}</Text>
                  </Row>
                )}
                {email && (
                  <Row>
                    <Text sx={{ width: "30%" }}>Email</Text>
                    <Text>{email}</Text>
                  </Row>
                )}
                {website && (
                  <Row>
                    <Text sx={{ width: "30%" }}>Website</Text>
                    <Link href={website} target="_blank">
                      Open Website
                    </Link>
                  </Row>
                )}
                {phone_number && (
                  <Row>
                    <Text sx={{ width: "30%" }}>Phone Number</Text>
                    <Text>{formatPhoneNumber(phone_number)}</Text>
                  </Row>
                )}
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
                      <Text>{project_owner}</Text>
                      <Text>{project_owner_position}</Text>
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
                    {category.name}
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
                    {formatShortDateTime(establish)}
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
