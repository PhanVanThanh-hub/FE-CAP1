export const CHOOSE_ROLES = [
  { key: 1, name: "User", value: -1 },
  { key: 2, name: "Startup", value: 1 },
  { key: 3, name: "Investor", value: 0 },
];

export const MENU = [
  { name: "General Account", url: "general-account", value: 1 },
  { name: "Notify", url: "notify", value: 2 },
  { name: "Private and Safe", url: "private-safe", value: 3 },
];

export const PRIVATE_AND_SAFE = [
  {
    key: 1,
    name: "Activity",
    options: [
      {
        key: 1,
        name: "Mute & Block",
        value: "muteAndBlock",
      },
      {
        key: 2,
        name: "Direct Messages",
        value: "directMessages",
      },
      {
        key: 3,
        name: "Content you see",
        value: "contentYouSee",
      },
    ],
  },
  {
    key: 2,
    name: "Personalization",
    options: [
      {
        key: 1,
        name: "Location Information",
        value: "location",
      },
    ],
  },
  {
    key: 3,
    name: "Learn more about privacy",
    options: [
      {
        key: 1,
        name: "Privacy Policy",
        value: "location",
      },
      {
        key: 2,
        name: "Contact Us",
        value: "location",
      },
    ],
  },
];

export const AREAS_OF_CONCERN = [
  { key: 1, name: "AI", value: "1" },
  { key: 2, name: "Education", value: "2" },
  { key: 3, name: "Hospital", value: "3" },
  { key: 4, name: "Blockchain", value: "4" },
  { key: 5, name: "Data Analyst", value: "5" },
  { key: 6, name: "Logistic", value: "6" },
  { key: 7, name: "Cryptocurrency", value: "7" },
  { key: 8, name: "Stock", value: "8" },
];
