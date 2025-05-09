import { createContext } from "react";
import type { PlanContextType } from "../../types/plan";

export const PlanContext = createContext<PlanContextType | null>(null);