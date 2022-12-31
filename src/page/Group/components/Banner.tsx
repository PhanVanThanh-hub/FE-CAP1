import {
    Avatar,
    AvatarGroup,
    Box,
    CardMedia,
    Menu,
    MenuItem,
    Tab,
    Tabs,
  } from "@mui/material";
  import React from "react";
  import {
    Col,
    Row,
    Text,
    UiDivider,
    UiIcon,
  } from "../../../components/elements";
  import {
    GroupDetailApiItem,
    GroupUserApiItem,
  } from "../../../types/models/groups";
  
  interface Props {
    handleChange: (event: React.SyntheticEvent, newTab: number) => void;
    tab: number;
    group: GroupDetailApiItem;
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const Banner = ({ handleChange, tab, group }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Col sx={{ backgroundColor: "background.paper", borderRadius: "12px" }}>
        <CardMedia
          component="img"
          image={group.cover_image}
          alt="logo"
          sx={{ height: "400px", borderRadius: "12px", objectFit: "contain" }}
        />
        <Col sx={{ padding: "10px 20px  " }}>
          <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
            {group.name}
          </Text>
          <Row sx={{ alignItems: "center" }}>
            <UiIcon icon="material-symbols:lock" />
            <Text sx={{ marginLeft: "10px", color: "text.disabled" }}>
              {group.status ? "Public Group" : " Private Groups"} ·{" "}
              {group.total_member} members
            </Text>
          </Row>
          <Row sx={{ margin: "10px 0px", justifyContent: "space-between" }}>
            <AvatarGroup max={24}>
              {group.new_member?.map((member: GroupUserApiItem) => {
                const avatar = `http://127.0.0.1:8000${member.profile.avatar}`;
                return <Avatar key={member.id} alt="Remy Sharp" src={avatar} />;
              })}
            </AvatarGroup>
            <Row>
              <Row
                onClick={handleClick}
                sx={{
                  border: "1px solid ",
                  alignItems: "center",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  borderColor: "button.primary",
                }}
              >
                <UiIcon icon="fluent:people-checkmark-16-filled" />
                <Text sx={{ margin: "0px 10px" }}>Participated</Text>
                <UiIcon icon="material-symbols:arrow-circle-down-outline" />
              </Row>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Row>
                    <UiIcon icon="fluent-mdl2:leave" />
                    <Text>Leave</Text>
                  </Row>
                </MenuItem>
              </Menu>
            </Row>
          </Row>
          <UiDivider sx={{ margin: "0px" }} />
          <Box>
            <Tabs
              value={tab}
              onChange={handleChange}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  color: "text.primary",
                },
              }}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Discuss" {...a11yProps(0)} />
              <Tab label="Everyone" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Col>
      </Col>
    );
  };
  
  export default Banner;
  