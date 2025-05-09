import { useContext } from "react";
import { HomeContext } from "../context/context/HomeContext";

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("useHomeContext debe usarse dentro de un HomeProvider");
    }
    return context;
};