import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'

//Styled-components

const Titulo = styled.div`

    `;

    const Navi = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: lightgray;
        height: 15%
    `;
    const H2 = styled.span`
        color: orange;
        font-family: 'Raleway';
        font-size: 50px;
        margin: 0;
        padding: 0;
    `;

    const H3 = styled.span`
        color: orange;
        font-family: 'Raleway';
        font-size: 50px;
        font-weight: 900;
        margin: 0;
        padding: 0;

    `;
//---------------------------------------

export default function Nav(props){
    

    return (
        <Navi>
            <Titulo>
                <H2>FOOD</H2>
                <H3>APP</H3>
            </Titulo>
            <SearchBar />
        </Navi>
    )
}