import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con elSnapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con el URL y al ALT indicado', () => {
        render(<GifItem title={title} url={url} />)
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url)

        // Mejor forma ->
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('Mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy
    })
})