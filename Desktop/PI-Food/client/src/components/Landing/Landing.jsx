import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function Landing(props){
    const Body = styled.div`
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease-in-out;
        &:hover{
            background-color: orange;
        }
    `;
    
    const H3 = styled(Link)`
        font-family: sans-serif;
        font-size: 30px;
        margin: 0;
        padding: 10px;
        text-decoration: none;
        color: black;
        background-color: orange;
        border-radius: 7px;
        transition: all 0.5s ease-in-out;
        box-shadow: 1px 5px 20px black;
        &:hover{
            background-color: white;
        }
    `;
    return (
        <Body>
            <H3 to='/home'>Entra al home</H3>
        </Body>
    )
}