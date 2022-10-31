import STORAGE_KEYS from "../constants/storage-keys";

interface UserCredential {
  access: string;
  refresh: string;
}

// export const removeSavedUserInfo = () => {
//   storage.remove("RAYYONE_WEB_ACCESS_TOKEN");
//   storage.remove("RAYYONE_WEB_USER");
// };

export const removeUserCredential = async () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS);
  localStorage.removeItem(STORAGE_KEYS.REFRESH);
};

export const saveUserCredential = async ({
  access,
  refresh,
}: UserCredential) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS, access);
  localStorage.setItem(STORAGE_KEYS.REFRESH, refresh);
};

export const getAccessTokenFromStorage = () => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS);
  return accessToken;
};
