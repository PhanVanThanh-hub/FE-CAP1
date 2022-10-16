export interface StartupApiItem {
  company: string;
  field: string;
  revenue: number;
  total_assets: number;
  expected_revenue: number;
  desired_investment: number;
}

export interface InvestorApiItem {
  company: string;
  position: string;
  min_investment: number;
  max_investment: number;
  categories: string[];
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
  id?: string;
  name?: string;
}

export interface RoleApiItem {
  id?: string;
  name?: string;
}
