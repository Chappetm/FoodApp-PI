import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'; 

//Styled-components

const Titulo = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Navi = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #141414;
        height: 120px;
        width: 100%;
    `;
    const H2 = styled(Link)`
        color: #f07b3f;
        font-family: 'Raleway';
        font-size: 60px;
        font-weight: 100;
        margin: 0;
        padding: 0;
        text-decoration: none;
    `;

    const H3 = styled(Link)`
        color: #f07b3f;
        font-family: 'Raleway';
        font-size: 60px;
        font-weight: 900;
        margin: 0;
        padding: 0;
        text-decoration: none;
    `;
//---------------------------------------

export default function Nav(props){
    

    return (
        <Navi>
            <Titulo>
                <H2 to='/home'>FOOD</H2>
                <H3 to='/home'>APP</H3>
            </Titulo>
            <SearchBar />
        </Navi>
    )
}