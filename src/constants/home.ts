import { PAGES } from "./app";

export const MENU_ITEM = [
  {
    title: "Home Page",
    icon: "ant-design:home-outlined",
    url: PAGES.HOME_PAGE,
  },
  { title: "Projects", icon: "charm:plant-pot", url: PAGES.PROJECTS },
  { title: "Search", icon: "ant-design:search-outlined", url: PAGES.SEARCH },
  { title: "Messenger", icon: "ci:message-writing", url: PAGES.MESSAGES },
  { title: "Group", icon: "heroicons:user-group", url: PAGES.GROUP },
  {
    title: "Notify",
    icon: "clarity:notification-outline-badged",
    url: PAGES.NOTIFY,
  },
  { title: "Setting", icon: "ant-design:setting-outlined", url: PAGES.SETTING },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SEARCH_BY = { STARTUP: "Startup", INVESTOR: "Investor" };

export const USER_ROLE = {
  STARTUP: "Startup",
  INVESTOR: "Investor",
  USER: "User",
};
