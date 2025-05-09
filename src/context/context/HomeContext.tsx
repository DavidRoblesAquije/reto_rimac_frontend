import { createContext } from "react";
import { type FormContextType } from "../../types/form";

export const HomeContext = createContext<FormContextType | null>(null);