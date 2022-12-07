import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import {
  Col,
  Row,
  Text,
  UiDivider,
  UiInputField,
} from "../../../components/elements";
import { fetchSearch, selectListUser } from "../../../redux/auth/authSlice";

const StyledUser = ({
  avatar,
  name,
  role,
}: {
  avatar: string;
  name: string;
  role: string;
}) => {
  return (
    <Row sx={{ padding: "10px 20px" }}>
      <Avatar src={avatar} />
      <Col sx={{ marginLeft: "10px" }}>
        <Text sx={{ fontWeight: "bold" }}>{name}</Text>
        <Text>{role}</Text>
      </Col>
    </Row>
  );
};

const Search = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const listUser = useSelector(selectListUser);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearch({ name: name }));
    };
    fetchData();
  }, [dispatch, name]);

  const handleFilterSearch = (name: string) => {
    setName(name);
  };

  return (
    <Col
      sx={{
        height: "100vh",
        width: "400px",
        backgroundColor: "background.paper",
        borderTopRightRadius: "24px",
      }}
    >
      <Col sx={{ margin: "10px 20px" }}>
        <Text
          fontSize="subtitle1"
          sx={{ fontWeight: "bold", margin: "10px 0px 20px" }}
        >
          Search
        </Text>
        <UiInputField
          placeholder="Search"
          icon="material-symbols:search"
          onChange={handleFilterSearch}
        />
      </Col>
      <UiDivider />
      <Col sx={{ height: "100%" }}>
        {listUser.length ? (
          listUser.map((user) => {
            return (
              <StyledUser
                name={user.name}
                avatar={user.avatar}
                role={user.role.name}
              />
            );
          })
        ) : (
          <Col
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>No recent searches.</Text>
          </Col>
        )}
      </Col>
    </Col>
  );
};

export default Search;
