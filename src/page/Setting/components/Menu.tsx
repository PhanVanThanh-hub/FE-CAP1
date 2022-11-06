import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { MENU } from "../../../constants";

const RowSelected = (props: any) => {
  return (
    <Row
      sx={{
        margin: "2px 0px",
        backgroundColor: "white",
        padding: "10px 15px",
        cursor: "pointer",
        borderRadius: "12px",
      }}
      {...props}
    />
  );
};

const Menu = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [menuSelected, setMenuSelected] = useState<number>();

  return (
    <Col
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        padding: "50px 20px",
      }}
    >
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="ep:setting" size="30px" />
        <Text
          fontSize="subtitle1"
          sx={{ marginLeft: "10px", fontWeight: "bold" }}
        >
          Settings
        </Text>
      </Row>
      <Col>
        {MENU.map((menu) => {
          return (
            <Row
              as={menu.value === menuSelected && RowSelected}
              onClick={() => {
                setMenuSelected(menu.value);
                history.push(`${match.url}/${menu.url}`);
              }}
              sx={{
                margin: "2px 0px",
                cursor: "pointer",
                padding: "10px 15px",
                "&:hover": {
                  backgroundColor: "white",
                  borderRadius: "12px",
                },
              }}
            >
              <Text fontSize="body1">{menu.name}</Text>
            </Row>
          );
        })}
      </Col>
    </Col>
  );
};

export default Menu;
