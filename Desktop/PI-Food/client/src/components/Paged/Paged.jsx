import React from 'react'

export default function Paged({ recipePerPage, recipes, paged }) {
    const pageNumber = []

    for(let i = 0; i <= Math.ceil(recipes/recipePerPage); i++){
        pageNumber.push(i+1);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber && pageNumber.map(n => (
                        <li>
                            <a onClick={() => paged(n)}>{n}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}