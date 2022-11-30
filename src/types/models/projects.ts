import { StartupApiItem, CategoryApiItem } from "./auth";

export interface MemberApiItem {
  project: ProjectApiItem;
  id: string;
  name: string;
  position: string;
  avatar: string;
  joined_date: string;
}

export interface ProjectApiItem {
  id?: number;
  startup: StartupApiItem;
  project_name: string;
  introduce: string;
  project_owner: string;
  project_owner_position: string;
  category: CategoryApiItem;
  establish: string;
  investment: number;
  percent: string;
  email: string;
  website: string;
  phone_number: string;
  abbreviations: string;
  image: string;
  video: string;
  status: string;
  members?: MemberApiItem[];
}

export interface ProjectMember {
  project: ProjectApiItem;
  member: MemberApiItem;
}
