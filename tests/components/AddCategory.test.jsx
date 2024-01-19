import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('Pruebas en <AddCategory />', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        // Crear el sujeto de pruebas
        render(<AddCategory onNewCategory={() => { }} />)
        // Extraer el input
        const input = screen.getByRole('textbox');
        // Se dispara el evento
        fireEvent.input(input, { target: { value: 'Saitama' } })
        // Que se espera del evento
        expect(input.value).toBe('Saitama')
    })

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        // Función que simula a onNewCategory
        const onNewCategory = jest.fn();

        // Valor a evaluar
        const inputValue = 'Saitama';

        // Crear el sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory} />)

        // Referencias al input y al form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Cambiar el valor de la caja de texto
        fireEvent.input(input, { target: { value: inputValue } })
        // Dispara el sumbit del form
        fireEvent.submit(form)

        // Evaluar que vuelva a ser un String ' ' vacio
        expect(input.value).toBe('')

        // Evaluación que la función haya sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        // Evaluación que la función haya sido llamada una sola vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Evaluación que la función haya sido llamada con el valor correcto
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe llamar onNewCateogry si el input está vacio', () => {
        // Función que simula a onNewCategory
        const onNewCategory = jest.fn();
        // Crear el sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory} />)
        // Referencias al input y al form
        const form = screen.getByRole('form');
        // Dispara el sumbit del form
        fireEvent.submit(form)

        // Evaluación que la función no haya sido llamada
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})