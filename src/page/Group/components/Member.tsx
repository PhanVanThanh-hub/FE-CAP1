import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiDivider,
  UiIcon,
  UiInputField,
} from "../../../components/elements";
import {
  fetchAdminGroup,
  fetchMemberGroup,
  selectAdminGroup,
  selectCountAdminGroup,
  selectCountMemberGroup,
  selectIsNextPageMember,
  selectMemberGroup,
} from "../../../redux/group/groupSlice";
import { ParamsProps } from "../../../types/models/app";
import { GroupUserApiItem } from "../../../types/models/groups";
import { ProfileApiItem } from "../../../types/models/user";

interface Props {
  profile: ProfileApiItem;
}

const Member = ({ profile }: Props) => {
  const [isFollow, setIsFollow] = useState<boolean>(false);

  return (
    <Row
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "5px",
      }}
    >
      <Row sx={{ alignItems: "center" }}>
        <Avatar src={profile.avatar} />
        <Text sx={{ marginLeft: "10px" }}>{profile.name}</Text>
      </Row>
      {!isFollow && (
        <UiButton onClick={() => setIsFollow(true)}>+ Follow</UiButton>
      )}
    </Row>
  );
};

const MemberList = () => {
  const [name, setName] = useState<string>("");
  const member = useSelector(selectMemberGroup);
  const countMemberGroup = useSelector(selectCountMemberGroup);
  const admin = useSelector(selectAdminGroup);
  const countAdminGroup = useSelector(selectCountAdminGroup);
  const isNextPage = useSelector(selectIsNextPageMember);
  const [page, setPage] = useState<number>(1);

  const handleFilterSearch = (name: string) => {
    setName(name);
  };

  const params = useParams<ParamsProps>();
  const { id } = params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAdminGroup({ id, role: "Admin" }));
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMemberGroup({ id, role: "Member", page }));
    };

    fetchData();
  }, [dispatch, id, page]);

  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "12px",
        width: "80%",
      }}
    >
      <Col sx={{ padding: "10px 20px" }}>
        <Row sx={{ marginBottom: "20px" }}>
          <Text sx={{ fontWeight: "bold" }}>Member</Text>
          <UiIcon icon="mdi:dot" />
          <Text sx={{ color: "text.disabled" }}>
            {countMemberGroup + countAdminGroup}
          </Text>
        </Row>
        <UiInputField
          placeholder="Search"
          icon="material-symbols:search"
          onChange={handleFilterSearch}
        />
        <UiDivider />
        <Col>
          <Text sx={{ fontWeight: "bold" }}>
            Admin & Moderators ({countAdminGroup})
          </Text>
          {admin.map((user: GroupUserApiItem) => {
            return <Member key={user.id} profile={user.profile} />;
          })}
        </Col>
        <UiDivider />
        <Col>
          <Text sx={{ fontWeight: "bold" }}>Member ({countMemberGroup})</Text>
          {member.map((user: GroupUserApiItem) => {
            return <Member key={user.id} profile={user.profile} />;
          })}
          {isNextPage && (
            <UiButton onClick={() => setPage(page + 1)}>Show More</UiButton>
          )}
        </Col>
      </Col>
    </Col>
  );
};

export default MemberList;
