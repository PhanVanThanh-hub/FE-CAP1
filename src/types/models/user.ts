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
  user: number;
}

export interface UserEntity extends UserApiItem {}

export interface NormalizedUser {
  users: { [key: string]: UserEntity };
}

export type UserRole = { value: string; name: string };
