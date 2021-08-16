import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

//Styled-components

const Contenedor = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    text-align: center;
    margin: 30px;
    font-weight: 500;
    font-family: 'Pacifico';
    color: #626262;
`;

export default function Fav(){
    const fav = useSelector(store => store.favoriteRecipes)

    return (
        <Contenedor>
            <Nav />
            <Title>Favorites</Title>
            <div>
            {
                fav.map(r => <Card 
                    title={r.title}
                    image={r.image}
                    diet={r.diets}
                    id={r.id}
                />)
            }
            </div>
            <Footer />
        </Contenedor>

    )
}