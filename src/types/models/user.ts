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

export interface UserEntity extends UserApiItem {}

export interface NormalizedUser {
  users: { [key: string]: UserEntity };
}

export type UserRole = { value: string; name: string };
