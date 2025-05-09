import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { PlanContext } from "../context/context/PlanContext";
import { BrowserRouter } from "react-router";
import { PlanCard } from "./PlanCard";
import type { Plan } from "../types/plan";

describe('PlanCard', () => {

    const planData: Plan = {
        name: "Plan en Casa",
        price: 100,
        age: 18,
        description: ["Incluye atención médica", "Servicio a domicilio"],
    };

    const setPlanData = vi.fn();

    const renderWithContext = (selectedOption: "me" | "other") =>
        render(
            <PlanContext.Provider value={{ planData, setPlanData }}>
                <BrowserRouter>
                    <PlanCard plan={planData} selectedOption={selectedOption} />
                </BrowserRouter>
            </PlanContext.Provider>
        );

    beforeEach(() => {
        setPlanData.mockClear();
    })

    test('Muestra el nombre del plan y su precio', () => {
        renderWithContext("me");
        expect(screen.getByText("Plan en Casa")).toBeInTheDocument();
        expect(screen.getByText(/\$100/)).toBeInTheDocument();
    })

    test('Muestra las descripciones del plan', () => { 
         renderWithContext("me");
         expect(screen.getByText(/atención médica/i)).toBeInTheDocument();
     })

    test('Llamar setPlanData al hacer click en " Seleccionar Plan" ', () => {
        renderWithContext("me");
        const button = screen.getByRole("button", { name: /Seleccionar Plan/i })
        fireEvent.click(button);
        expect(setPlanData).toHaveBeenCalledTimes(1);
    })
})