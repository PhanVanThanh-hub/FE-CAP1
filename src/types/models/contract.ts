import { StartupApiItem } from "./auth";
import { ProjectApiItem } from "./projects";
import { InvestorApiItem } from "./user";

export interface ContractApiItems {
  id: number;
  description: string;
  close_deal_at: string;
  investment_money: string;
  investment_percent: string;
  investor: InvestorApiItem;
  investor_confirm: boolean;
  investor_deal_at: string;
  project: ProjectApiItem;
  startup: StartupApiItem;
  startup_confirm: boolean;
  startup_deal_at: string;
}

export interface InvestorStatisticApiItems {
  number_investment_projects: number;
  number_of_contracts: number;
  total_investment_money: number;
}
