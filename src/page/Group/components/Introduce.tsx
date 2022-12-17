import React from "react";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { GroupApiItem } from "../../../types/models/groups";
import { formatShortDateTime } from "../../../until/helpers";

interface Props {
  group: GroupApiItem;
}

const Introduce = ({ group }: Props) => {
  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        minHeight: "100px",
        width: "95%",
        borderRadius: "12px",
      }}
    >
      <Col sx={{ padding: "10px 20px" }}>
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Introduce
        </Text>
        <Text sx={{ margin: "5px 0px" }}>{group.description}</Text>
        <Col>
          <Row>
            <UiIcon icon="material-symbols:lock" />
            {group.status ? (
              <Col sx={{ marginLeft: "10px" }}>
                <Text sx={{ fontWeight: "bold" }}>Public</Text>
                <Text fontSize="caption">
                  Anyone can see everyone in the group and what they post.
                </Text>
              </Col>
            ) : (
              <Col sx={{ marginLeft: "10px" }}>
                <Text sx={{ fontWeight: "bold" }}>Private</Text>
                <Text fontSize="caption">
                  Only members can see everyone in the group and what they post.
                </Text>
              </Col>
            )}
          </Row>
          <Row>
            <UiIcon icon="ic:baseline-remove-red-eye" />
            <Col sx={{ marginLeft: "10px" }}>
              <Text sx={{ fontWeight: "bold" }}>Display</Text>
              <Text fontSize="caption">Anyone can find this group.</Text>
            </Col>
          </Row>
          <Row>
            <UiIcon icon="material-symbols:history-rounded" />
            <Col sx={{ marginLeft: "10px" }}>
              <Text sx={{ fontWeight: "bold" }}>History</Text>
              <Text fontSize="caption">
                Group creation date: {formatShortDateTime(group.date_created)}.
              </Text>
            </Col>
          </Row>
        </Col>
      </Col>
    </Col>
  );
};

export default Introduce;
