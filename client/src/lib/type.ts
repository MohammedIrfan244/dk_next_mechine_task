

export type TargetType = "info" | "influencer" | "celebrity";

export interface InfoData {
  name: string;
  email:string
  business: string;
  message: string;
}

export interface InfluencerData {
  name: string;
  email:string
  business: string;
  avgBudget: number;
  category: string;
}

export interface CelebrityData {
  name: string;
  email:string
  business: string;
  event: string;
  budget: number;
}