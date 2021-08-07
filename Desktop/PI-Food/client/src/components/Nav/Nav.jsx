import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav(props){
    const Navi = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: lightgray;
        height: 15%
    `
    const H2 = styled.h2`
        color: orange;
        font-family: 'Raleway';
        font-size: 50px;
        margin: 0;
        padding: 0;
    `;
    return (
        <Navi>
            <H2>FOODAPP</H2>
            <SearchBar />
        </Navi>
    )
}