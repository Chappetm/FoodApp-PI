import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import background from '../../background.jpg'

export default function Landing(props){
    const Body = styled.div`
        background-image: url(${background});
        background-size: cover;
        margin: 0;
        padding: 0;
        height: 100%;
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
        font-size: 30px;
        margin-top: 200px;
        padding: 10px;
        text-decoration: none;
        color: orange;
        background-color: rgba(0,0,0,0.5) ;
        border-radius: 7px;
        transition: all 0.3s ease-in-out;
        box-shadow: 1px 5px 20px black;
        &:hover{
            background-color: rgba(0,0,0,2)
        }
    `;
    return (
        <Body>
            <H3 to='/home'>Entra al home</H3>
        </Body>
    )
}