import { RoleApiItem } from "./auth";

export interface UserApiItem {
  id?: number;
  created_at?: string;
  updated_at?: string;
  deletedAt?: string;
  name?: string;
  email?: string;
  isActive?: boolean;
  roles?: UserRole[];
  token?: string;
}

export interface ProfileApiItem {
  avatar: string;
  birthday: string;
  id: number;
  name: string;
  role: RoleApiItem;
  user: { id: number; email: string };
  phone_number: string;
}

export interface InvestorApiItem {
  id: number;
  company: string;
  max_investment: string;
  min_investment: string;
  profile: ProfileApiItem;
  position: string;
}

export interface UserEntity extends UserApiItem {}

export interface NormalizedUser {
  users: { [key: string]: UserEntity };
}

export type UserRole = { value: string; name: string };
