export interface Plan {
  name: string;
  age: number;
  price: number;
  description: string[];
}

export interface PlanContextType {
  planData: Plan;
  setPlanData: React.Dispatch<React.SetStateAction<Plan>>;
}