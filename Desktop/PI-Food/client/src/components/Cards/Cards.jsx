import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

//Styled-Components

const Body = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `;

//----------------------------------------

export default function Cards({currentRecipes}){
    
    const recipes = useSelector(store => store.recipesLoaded)
    

    return (
        <Body>
            {
                currentRecipes.map(r => <Card 
                    title={r.title}
                    image={r.image}
                    diet={r.diets}
                    id={r.id}
                />)}
        </Body>
    )
}