import { StartupApiItem, CategoryApiItem } from "./auth";
import { InvestorApiItem } from "./user";

export interface MemberApiItem {
  project: ProjectApiItem;
  id: string;
  name: string;
  position: string;
  avatar: string;
  joined_date: string;
}

export interface InvestorProjectApiItem {
  id: number;
  description: string;
  investment_money: number;
  investment_percent: number;
  investor: InvestorApiItem;
  project: number;
  date_create: string;
}

export interface ProjectApiItem {
  id?: number;
  startup: number;
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

export interface ProjectDetailApiItem {
  id?: number;
  startup: StartupApiItem;
  project_name: string;
  introduce: string;
  project_owner: string;
  project_owner_position: string;
  category: CategoryApiItem;
  establish: string;
  investment: number;
  percent: number;
  email: string;
  website: string;
  phone_number: string;
  abbreviations: string;
  image: string;
  video: string;
  status: string;
  members?: MemberApiItem[];
  investor_project: InvestorProjectApiItem[];
}

export interface ProjectMember {
  project: ProjectApiItem;
  member: MemberApiItem;
}
