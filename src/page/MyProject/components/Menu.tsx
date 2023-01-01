import React from "react";
import { CardMedia, SxProps } from "@mui/material";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Row, UiIcon, Text, Col } from "../../../components/elements";
import { COLOR, MENU_ITEM_PROJECT } from "../../../constants";
import logo from "../../../assets/image/logo.png";

interface MenuChildrenProps {
  icon: any;
  title: string;
  url: string;
}

const RowStyle: SxProps = {
  width: "3.75em",
  height: "3.75em",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
};

const MenuChildren = ({ icon, title, url }: MenuChildrenProps) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Row
      onClick={() => history.push(`${match.url}${url}`)}
      sx={{
        alignItems: "center",
        marginTop: "10px",
        cursor: "pointer",
        "& :hover": {
          color: "action.hover",
        },
      }}
    >
      <Row
        sx={{
          backgroundColor: COLOR.icon.paper,
          border: `1px solid ${COLOR.icon.border}`,
          ...RowStyle,
        }}
      >
        <UiIcon icon={icon} />
      </Row>
      <Text ml="20px" fontSize="body2">
        {title}
      </Text>
    </Row>
  );
};

const Menu = () => {
  const history = useHistory();

  return (
    <Col
      sx={{
        width: "100%",
        maxWidth: 260,
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
        pl: "30px",
      }}
    >
      <Col sx={{ height: "100%" }}>
        <Col>
          <CardMedia
            component="img"
            image={logo}
            alt="Paella dish"
            style={{ width: "60%", marginBottom: "20px", cursor: "pointer" }}
            onClick={() => history.push("/")}
          />
          {/* <Row sx={{ alignItems: "center" }}>
            <Avatar />
            <Text fontSize="body1" sx={{ marginLeft: "15px" }}>
              Elian
            </Text>
          </Row> */}

          {MENU_ITEM_PROJECT.map((item) => {
            return (
              <MenuChildren
                title={item.title}
                icon={item.icon}
                url={item.url}
              />
            );
          })}
        </Col>
      </Col>
    </Col>
  );
};

export default Menu;
