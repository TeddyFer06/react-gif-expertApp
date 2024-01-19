import { useState } from "react"
import Proptypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // Leer el valor que se ingresa en el input
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // Evitar que el navegador recargue
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [...categories, inputValue])
        setInputValue('');
        onNewCategory(inputValue.trim())
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: Proptypes.func.isRequired,
}
