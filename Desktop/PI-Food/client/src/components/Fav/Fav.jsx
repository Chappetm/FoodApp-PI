import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

//Styled-components

const Contenedor = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default function Fav(){
    return (
        <Contenedor>
            <Nav />
            <h1>FAVORITES</h1>
            <Footer />
        </Contenedor>

    )
}