import React, { useEffect } from "react";
import { Avatar, Grid } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

const Member = () => {
  const listMember = [
    {
      key: 1,
      name: "Esther Howard",
      birthday: "CEO - join 08/2022",
    },
    {
      key: 2,
      name: "Esther Howard",
      birthday: "CEO - join 08/2022",
    },
    {
      key: 3,
      name: "Esther Howard",
      birthday: "CEO - join 08/2022",
    },
    {
      key: 4,
      name: "Esther Howard",
      birthday: "CEO - join 08/2022",
    },
  ];
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
          {listMember.map((member) => {
            return (
              <Grid item xs={4} key={member.key}>
                <Row sx={{ alignItems: "center" }}>
                  <Avatar />
                  <Col sx={{ marginLeft: "10px" }}>
                    <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                      Esther Howard
                    </Text>
                    <Text fontSize="caption">CEO - join 08/2022</Text>
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
