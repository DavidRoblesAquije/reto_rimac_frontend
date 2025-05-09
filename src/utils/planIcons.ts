import { iconadduser, iconhospital, iconhouse } from "../assets";

export const getPlanIcon = (name: string): string => {
    switch (name) {
        case "Plan en Casa":
            return iconhouse;
        case "Plan en Casa y Clínica":
            return iconhospital;
        case "Plan en Casa + Chequeo ":
            return iconadduser;
        default:
            return iconhouse;
    }
};