import { ProfileApiItem } from "./user";

export interface GroupApiItem {
  cover_image: string;
  date_created: string;
  description: string;
  id: number;
  name: string;
  status: boolean;
  total_member: number;
}

export interface GroupRoleApiItem {
  id: number;
  name: string;
}

export interface GroupUserApiItem {
  id: number;
  group: GroupApiItem;
  role: GroupRoleApiItem;
  profile: ProfileApiItem;
}

export interface GroupDetailApiItem {
  cover_image: string;
  date_created: string;
  description: string;
  id: number;
  name: string;
  status: boolean;
  total_member: number;
  new_member: GroupUserApiItem[];
}
