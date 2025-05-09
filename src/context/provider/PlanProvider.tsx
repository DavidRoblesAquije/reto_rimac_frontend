import { useEffect, useState, type ReactNode } from "react";
import type { Plan } from "../../types/plan";
import { PlanContext } from "../context/PlanContext";

interface Props {
    children: ReactNode;
}

const initialstate: Plan = {
    name: "",
    description: "",
    age: 0,
    price: 0
};

export const PlanProvider = ({ children }: Props) => {
    const [planData, setPlanData] = useState(() => {
        const savedData = localStorage.getItem("selectedPlan");
        return savedData ? JSON.parse(savedData) : initialstate;
    });

    useEffect(() => {
        localStorage.setItem("selectedPlan", JSON.stringify(planData));
    }, [planData]);

    return (
        <PlanContext.Provider value={{ planData, setPlanData }}>
            {children}
        </PlanContext.Provider>
    );
}