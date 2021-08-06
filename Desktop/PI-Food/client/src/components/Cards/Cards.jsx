import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

export default function Cards(){
    const Body = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center
    `;
    const recipes = useSelector(store => store.recipesLoaded)

    return (
        <Body>
            {
                recipes.map(r => <Card 
                    title={r.title}
                    image={r.image}
                    diet={r.diets}
                    id={r.id}
                />)}
        </Body>
    )
}