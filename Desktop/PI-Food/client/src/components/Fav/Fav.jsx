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
    font-size: 60px;
    font-weight: 500;
    font-family: 'Pacifico';
    color: #626262;
`;

const DivFav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Span = styled.span`
    font-family: 'Raleway';
    font-size: 30px;
`;

export default function Fav(){
    const fav = useSelector(store => store.favoriteRecipes)

    return (
        <Contenedor>
            <Nav />
            <Title>Favorites</Title>
            {
                fav.length
                ? <DivFav>
                {
                    fav.map(r => <Card 
                        title={r.title}
                        image={r.image}
                        diet={r.diets}
                        id={r.id}
                    />)
                }
                </DivFav>
                : <Span>No favorites yet 😔</Span>
            }
            <br />
            <Footer />
        </Contenedor>

    )
}