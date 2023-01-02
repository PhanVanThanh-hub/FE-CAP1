export interface StartupApiItem {
  company: string;
  field: string;
  revenue: number;
  total_assets: number;
  expected_revenue: number;
  desired_investment: number;
  id: number;
}

export interface InvestorApiItem {
  company: string;
  position: string;
  min_investment: number;
  max_investment: number;
  categories: string[];
}

export interface UserApiItem {
  id: number;
}

export interface RegisterApiItem {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  birthday: string;
  start_up?: StartupApiItem;
  investor?: InvestorApiItem;
}

export interface CategoryApiItem {
  id: string;
  name: string;
  logo: string;
}

export interface RoleApiItem {
  id: string;
  name: string;
}

export interface FindAccountApiItem {
  email: string;
}

export interface OTPApiItem {
  email: string;
  otp: string;
}

export interface ResetPasswordApiItem {
  email: string;
  otp: string;
  password: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface LoginApiItem {
  access: string;
  refresh: string;
}

export interface ProfileApiItem {
  avatar: string;
  birthday: string;
  id: number;
  phone_number: string;
  role: RoleApiItem;
  name: string;
  user: { email: string; id: number };
}

export interface InformationContractApiItem {
  avatar: string;
  birthday: string;
  id: number;
  phone_number: string;
  role: RoleApiItem;
  name: string;
  user: { email: string; id: number };
  information: {
    id: number;
    company: string;
    field: string;
    revenue: number;
    total_assets: number;
    expected_revenue: number;
    desired_investment: number;
    position: string;
    min_investment: number;
    max_investment: number;
    categories: string[];
  };
}
