import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { selectProfile } from "../../../redux/auth/authSlice";
import { formatShortDateTime } from "../../../until/helpers";
import { formatPhoneNumber } from "../../../until/helpers/functions";

const RowInformation = ({
  icon,
  content,
}: {
  icon: string;
  content: string;
}) => {
  return (
    <Row sx={{ padding: "5px 0px", alignItems: "center" }}>
      <UiIcon icon={icon} size="30" />
      <Text sx={{ paddingLeft: "5px" }}>{content}</Text>
    </Row>
  );
};

const Introduce = () => {
  const profile = useSelector(selectProfile);

  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "12px",
      }}
    >
      <Col sx={{ padding: "10px 20px" }}>
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Introduce
        </Text>
        <RowInformation
          icon="ic:baseline-local-phone"
          content={formatPhoneNumber(profile?.phone_number || "") || ""}
        />
        <RowInformation
          icon="mdi:birthday-cake"
          content={formatShortDateTime(profile?.birthday)}
        />
        <RowInformation icon="mdi:user" content={profile?.role.name || ""} />
        <RowInformation
          icon="mdi:company"
          content={profile?.information.company || ""}
        />
        <RowInformation
          icon="ic:round-email"
          content={profile?.user.email || ""}
        />

        {profile?.information.field && (
          <RowInformation icon="" content={profile.information.field} />
        )}
      </Col>
    </Col>
  );
};

export default Introduce;
