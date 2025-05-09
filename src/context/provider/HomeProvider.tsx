import { useEffect, useState, type ReactNode } from "react";
import type { FormData } from "../../types/form";
import { HomeContext } from "../context/HomeContext";

interface Props {
    children: ReactNode;
}

const initialState: FormData = {
    docType: "DNI",
    docNumber: "",
    celular: "",
    politicaPrivacidad: false,
    politicaComunica: false,
};

export const HomeProvider = ({ children }: Props) => {
    const [formData, setFormData] = useState<FormData>(() => {
        const savedData = localStorage.getItem("homeData");
        return savedData ? JSON.parse(savedData) : initialState;
    })

    useEffect(() => {
        localStorage.setItem("homeData", JSON.stringify(formData));
    }, [formData])

    return (
        <HomeContext.Provider value={{ formData, setFormData }}>
            {children}
        </HomeContext.Provider>
    )
}