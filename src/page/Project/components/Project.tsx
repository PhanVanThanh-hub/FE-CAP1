import { Avatar, AvatarGroup, CardMedia } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { formatMoney } from "../../../until/helpers/functions";
import { MemberApiItem, ProjectApiItem } from "../../../types/models/projects";
import { formatShortDateTime } from "../../../until/helpers";
import { useParams } from "react-router-dom";
import { ParamsProps } from "../../../types/models/app";

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
          borderColor: "rgb(236, 64, 122)",
        },
      }}
    >
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
      <Text fontSize="body2" sx={{ fontWeight: "bold" }}>
        {project_name}
      </Text>
      <Text
        sx={{
          margin: "5px 0px",
          height: "50px",
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
              return <Avatar src={avatar} />;
            })}
          </AvatarGroup>
        </Row>
      ) : (
        <></>
      )}

      <Col
        sx={{
          margin: "10px 0px",
        }}
      >
        <Text>
          Investment :<strong>{formatMoney(investment)}</strong>{" "}
        </Text>
        <Text>
          For : <strong>{percent}%</strong> of the company's shares
        </Text>
      </Col>
      <Text fontSize="caption">{formatShortDateTime(establish)}</Text>
    </Col>
  );
};

export default Project;
