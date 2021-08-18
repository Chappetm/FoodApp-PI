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

const Span = styled.span`
    margin: 100px;
    font-size: 30px;
    font-family: 'Raleway';
`;

//----------------------------------------

export default function Cards({currentRecipes}){
    return (
        <Body>
            {   currentRecipes && typeof currentRecipes === 'object'
                ?   currentRecipes.map(r => <Card 
                        title={r.title}
                        image={r.image}
                        diet={r.diets}
                        score={r.spoonacularScore}
                        id={r.id}
                    />)
                :   <Span>No se encontraron recetas 🥱</Span>
            }
        </Body>
    )
}