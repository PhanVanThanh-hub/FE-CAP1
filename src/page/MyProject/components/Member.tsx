import React, { useEffect } from "react";
import { Avatar, Grid } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import * as Scroll from "react-scroll";
import { MemberApiItem } from "../../../types/models/projects";
import { formatShortDateTime } from "../../../until/helpers";

interface Props {
  members: MemberApiItem[];
}

let Element = Scroll.Element;

const Member = ({ members }: Props) => {
  const scrollToTop = () =>
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Col sx={{ margin: "20px 0px" }}>
      <Element name="memberProject">
        <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
          Member
        </Text>
        <Grid container rowSpacing={3}>
          {members.map((member: MemberApiItem) => {
            const avatar = `http://127.0.0.1:8000${member.avatar}`;

            return (
              <Grid item xs={4} key={member.id}>
                <Row sx={{ alignItems: "center" }}>
                  <Avatar src={avatar} />
                  <Col sx={{ marginLeft: "10px" }}>
                    <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                      {member.name}
                    </Text>
                    <Text fontSize="caption">
                      {member.position} - join{" "}
                      {formatShortDateTime(member.joined_date)}
                    </Text>
                  </Col>
                </Row>
              </Grid>
            );
          })}
        </Grid>
      </Element>
    </Col>
  );
};

export default Member;
