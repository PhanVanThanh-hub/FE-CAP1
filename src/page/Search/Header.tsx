import React, { useEffect, useState } from "react";
import { Row, UiInputField } from "../../components/elements";
import logo from "../../assets/image/logo.png";
import { CardMedia } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { fetchSearch } from "../../redux/auth/authSlice";
import { useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const history = useHistory();

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
    <Row
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "24px",
      }}
    >
      <Row
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px 20px",
        }}
      >
        <Row sx={{ alignItems: "center" }}>
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            onClick={() => history.push("/")}
            style={{ width: "20%", cursor: "pointer" }}
          />
          <UiInputField
            placeholder="Search"
            icon="material-symbols:search"
            onChange={handleFilterSearch}
          />
        </Row>
      </Row>
    </Row>
  );
};

export default Header;
