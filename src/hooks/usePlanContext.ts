import { useContext } from "react";
import { PlanContext } from "../context/context/PlanContext";

export const usePlanContext = () => {
    const context = useContext(PlanContext);
    if (!context) {
        throw new Error("Homecontext debe usarse dentro de un Provider");
    }
    return context
}
