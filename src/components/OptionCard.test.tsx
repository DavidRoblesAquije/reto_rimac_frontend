import { describe, expect, test, vi } from 'vitest'
import { iconprotection } from '../assets'
import { OptionCard } from './OptionCard'
import { fireEvent, render, screen } from "@testing-library/react";

describe('OptionCard', () => {
    const props = {
        icon: iconprotection,
        title: "Para mí",
        description: "Cotiza tu seguro de salud",
        selected: false,
        onSelected: vi.fn()
    }

    test("renderiza correctamente titulo y descripcion", () => {
        render(<OptionCard {...props} />)

        expect(screen.getByText("Para mí")).toBeInTheDocument();
        expect(screen.getByText(/Cotiza tu seguro/)).toBeInTheDocument();
    })

    test('Ejecuta onSelected al hacer click', () => {
        render(<OptionCard {...props} />)

        const card = screen.getByText("Para mí");
        fireEvent.click(card);

        expect(props.onSelected).toHaveBeenCalledTimes(1);
    })
})