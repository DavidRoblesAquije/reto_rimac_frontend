import { describe, expect, test } from "vitest";
import { HomeProvider } from "../context/provider/HomeProvider";
import { BrowserRouter } from "react-router";
import { HomeForm } from "./HomeForm";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('HomeForm', () => {
    const renderForm = () => {
        render(
            <HomeProvider>
                <BrowserRouter>
                    <HomeForm />
                </BrowserRouter>
            </HomeProvider>
        )
    }

    test('Solo deben ingresar numeros en el campo documento', () => {
        renderForm();
        const inputdoc = screen.getByPlaceholderText("Nro de documento");

        fireEvent.change(inputdoc, { target: { value: "123" } })

        expect((inputdoc as HTMLInputElement).value).toBe("123")
    })

    test('El boton "Cotiza aquí" esta desactivado al inicio', () => {
        renderForm();
        const button = screen.getByRole("button", { name: /cotiza/i });
        expect(button).toBeDisabled();
    })

    test('El boton se habilita al completar los campos', async () => {
        renderForm();
        const docNumber = screen.getByPlaceholderText("Nro de documento");
        const celular = screen.getByPlaceholderText("Celular");
        const privacyPolicy = screen.getByLabelText(/Política de Privacidad/i);
        const ComerciPolicy = screen.getByLabelText(/Política Comunicaciones/i);

        await userEvent.type(docNumber, "75281949"); //se espera de 8 a más digitos
        await userEvent.type(celular, "963214587"); //se espera 9 digitos
        await userEvent.click(privacyPolicy);
        await userEvent.click(ComerciPolicy)

        const button = screen.getByRole("button", { name: /cotiza/i });
        expect(button).toBeEnabled();
    })
})