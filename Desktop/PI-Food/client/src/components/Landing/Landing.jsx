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
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: all 0.5s ease-in-out;
        &:hover{
            background-color: orange;
        }
    `;
    
    const H3 = styled(Link)`
        font-size: 30px;
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

    const Titulo = styled.div`
        background-color: rgba(0,0,0,0.5);
        border-radius: 30px;
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const Welcome = styled.h1`
        font-size: 50px;
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Pacifico';
        padding: 0;
        margin: 0;
    `;

    const H1 = styled.h1`
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Raleway';
        font-size: 100px;
        font-weight: 10;
        padding: 0;
        margin: 0;
    `;

    const H2 = styled.h1`
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Raleway';
        font-size: 100px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    `;

    const Hcontenedor = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    `;

    return (
        <Body>
            <Titulo>
                <Welcome>Welcome to</Welcome>
                <Hcontenedor>
                    <H1>FOOD</H1>
                    <H2>APP</H2>
                </Hcontenedor>
            </Titulo>
            <H3 to='/home'>Find Your Recipe</H3>
        </Body>
    )
}