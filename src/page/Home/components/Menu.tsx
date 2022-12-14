import React from "react";
import { SxProps } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR, MENU_ITEM, USER_ROLE } from "../../../constants";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../redux/auth/authSlice";
import { getUserRoleFromStorage } from "../../../services/auth";
import { PAGES } from "../../../constants/app";

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

  return (
    <Row
      onClick={() => history.push(url)}
      sx={{
        alignItems: "center",
        marginTop: "10px",
        cursor: "pointer",
        "& :hover": {
          color: "action.active",
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
  const userRole = useSelector(selectUserRole) || getUserRoleFromStorage();

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
      <Col sx={{ height: "100%", justifyContent: "space-around" }}>
        <Col>
          {MENU_ITEM.map((item) => {
            return (
              <MenuChildren
                title={item.title}
                icon={item.icon}
                url={item.url}
              />
            );
          })}
          {userRole === USER_ROLE.STARTUP && (
            <MenuChildren
              title="My Project"
              icon="charm:plant-pot"
              url={PAGES.MY_PROJECT}
            />
          )}
          {userRole === USER_ROLE.INVESTOR && (
            <MenuChildren
              title="My Project"
              icon="charm:plant-pot"
              url={PAGES.MY_PROJECT}
            />
          )}
        </Col>
      </Col>
    </Col>
  );
};

export default Menu;
