import React, { useEffect } from "react";
import { Avatar, Divider } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR, USER_ROLE } from "../../../constants";
import { ProfileApiItem } from "../../../types/models/user";
import { formatPhoneNumber } from "../../../until/helpers/functions";
import { useAppDispatch } from "../../../app/hooks";
import { fetchProfile, selectProfile } from "../../../redux/auth/authSlice";
import { useSelector } from "react-redux";

interface Props {
  userBoxChat: ProfileApiItem;
}

const RowInformation = ({
  content,
  icon,
}: {
  content: string;
  icon: string;
}) => {
  return (
    <Row sx={{ margin: "5px 0px", alignItems: "center" }}>
      <UiIcon icon={icon} size="20" />
      <Text fontSize="caption" sx={{ marginLeft: "5px" }}>
        {content}
      </Text>
    </Row>
  );
};

const Information = ({ userBoxChat }: Props) => {
  const avatar = `http://127.0.0.1:8000${userBoxChat?.avatar}`;
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProfile({ user_id: userBoxChat.user.id }));
    };
    fetchData();
  }, [dispatch, userBoxChat.user.id]);

  console.log("profile:", profile);

  return (
    <Col
      sx={{ alginItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Col
        sx={{
          height: "95vh",
        }}
      >
        <Col
          sx={{
            borderRadius: "12px",
            backgroundColor: "background.paper",
            padding: "20px 0px",
            alignItems: "center",
          }}
        >
          <Row
            sx={{
              borderRadius: "50%",
              border: `1px solid ${COLOR.icon.onl} `,
              height: "125px",
              width: "125px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={avatar} sx={{ height: "100px", width: "100px" }} />
          </Row>
          <Row sx={{ margin: "5px 0px" }}>
            <UiIcon icon="ci:dot-02-s" color={COLOR.icon.onl} />
          </Row>
          <Text sx={{ fontWeight: "bold" }}>{userBoxChat.role.name}</Text>
          <Text>{userBoxChat.name}</Text>
        </Col>
        <Col
          sx={{
            marginTop: "20px",
            borderRadius: "12px",
            backgroundColor: "background.paper",
            padding: "20px 15px",
          }}
        >
          <Text sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            Information
          </Text>
          <RowInformation
            content={formatPhoneNumber(userBoxChat.phone_number) || ""}
            icon="akar-icons:phone"
          />
          <RowInformation
            content={userBoxChat.user.email}
            icon="material-symbols:mail-rounded"
          />

          <Divider sx={{ color: "divider", margin: "10px 0px" }} />
          {profile?.role.name === USER_ROLE.STARTUP && (
            <Col>
              <Text sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                Startup
              </Text>
              <RowInformation
                content={profile.information.company}
                icon="mdi:company"
              />
            </Col>
          )}
          {profile?.role.name === USER_ROLE.INVESTOR && (
            <Col>
              <Text sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                Investor
              </Text>
              <RowInformation
                content={profile.information.company}
                icon="mdi:company"
              />
              <RowInformation
                content={profile.information.position}
                icon="mdi:user-circle-outline"
              />
            </Col>
          )}
        </Col>
      </Col>
    </Col>
  );
};
export default Information;
