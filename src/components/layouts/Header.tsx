import React from "react";
import { Box, Grid } from "@mui/material";
import { Row, Text } from "../elements";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Box
      sx={{
        color: "black",
        padding: "10px  50px",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item>
          <Row>
            <Text
              sx={{ marginRight: "20px", cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Trang chủ
            </Text>
            <Text
              sx={{ cursor: "pointer" }}
              onClick={() => history.push("/product-page")}
            >
              Sản phẩm
            </Text>
          </Row>
        </Grid>
        <Grid item>
          <Row>
            <Row
              sx={{ alignItems: "center", cursor: "pointer" }}
              onClick={() => history.push("/login")}
            >
              <Icon icon="ant-design:login-outlined" />
              <Text sx={{ marginLeft: "5px" }}>Đăng nhập</Text>
            </Row>
          </Row>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
