export const MENU_ITEM = [
  { title: "Home Page", icon: "ant-design:home-outlined", url: "" },
  { title: "Projects", icon: "charm:plant-pot", url: "/projects" },
  { title: "Search", icon: "ant-design:search-outlined", url: "/search" },
  { title: "Messenger", icon: "ci:message-writing", url: "/message" },
  { title: "Group", icon: "heroicons:user-group", url: "/groups" },
  {
    title: "Notify",
    icon: "clarity:notification-outline-badged",
    url: "/notify",
  },
  { title: "Setting", icon: "ant-design:setting-outlined", url: "/settings" },
  { title: "My Project", icon: "charm:plant-pot", url: "/my-projects" },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
