import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {
    const [categories, setCategories] = useState(['Fortnite']);

    const onAddCategory = (newCategory) => {
        // Validar que no haya un nombre de categoría repetido
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1 style={{ textAlign: 'center' }}>Gif Expert App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.map(category =>
            (
                <GifGrid key={category} category={category} />
            ))
            }

        </ >
    )
}

