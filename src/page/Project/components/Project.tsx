import { Avatar, AvatarGroup, CardMedia } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { formatMoney } from "../../../until/helpers/functions";
import { MemberApiItem, ProjectApiItem } from "../../../types/models/projects";
import { formatShortDateTime } from "../../../until/helpers";
import { COLOR } from "../../../constants";

interface Props {
  project: ProjectApiItem;
}

const Project = ({ project }: Props) => {
  const {
    establish,
    project_name,
    introduce,
    image,
    investment,
    percent,
    members,
    category,
  } = project;

  return (
    <Col
      sx={{
        borderRadius: "12px",
        padding: "15px 20px",
        backgroundColor: "background.paper",
        cursor: "pointer",
        border: "1px solid transparent",
        width: "100%",
        "&:hover": {
          borderColor: COLOR.icon.primary,
        },
      }}
    >
      <Row sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            margin: "10px 0px",
            height: "150px",
            width: "100%",
            borderRadius: "12px",
          }}
          image={image}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          height="30px"
          image={category.logo}
          style={{
            width: "30px",
            position: "absolute",
            top: "50%",
            left: "-5%",
          }}
        />
      </Row>
      <Text fontSize="body2" sx={{ fontWeight: "bold" }}>
        {project_name}
      </Text>
      <Text
        sx={{
          margin: "5px 0px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }}
      >
        {introduce}
      </Text>
      {members?.length ? (
        <Row sx={{ alignItems: "center" }}>
          <Text sx={{ marginRight: "10px" }}>Team Member:</Text>
          <AvatarGroup max={4}>
            {members.map((member: MemberApiItem) => {
              const avatar = `http://127.0.0.1:8000${member.avatar}`;
              return (
                <Avatar
                  key={member.id}
                  src={avatar}
                  sx={{ width: "35px", height: "35px" }}
                />
              );
            })}
          </AvatarGroup>
        </Row>
      ) : (
        <></>
      )}

      <Col sx={{ marginTop: "10px" }}>
        <Row sx={{ justifyContent: "space-between" }}>
          <Text>Total call for funds :</Text>
          <Text sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}>
            {formatMoney(investment)}
          </Text>
        </Row>
        <Row sx={{ justifyContent: "space-between" }}>
          <Text>For :</Text>
          <Text sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}>
            {percent}% the company's shares
          </Text>
        </Row>
      </Col>
      <Text fontSize="caption">{formatShortDateTime(establish)}</Text>
    </Col>
  );
};

export default Project;
