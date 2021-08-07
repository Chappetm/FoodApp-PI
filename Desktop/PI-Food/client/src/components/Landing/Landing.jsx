import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import video1 from '../../background.mp4'
import video2 from '../../background2.mp4'

export default function Landing(props){
    const Body = styled.div`
        background-size: cover;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
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
        position: relative;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
    `;

    const Titulo2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        height: 100%;
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

    const ContenedorVideo = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
    `;

    const Videox = styled.video`
        height: 100%;
        width: 100%;
        object-fit: cover;
    `;

    const Boton = styled.div`
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <Body>
            <ContenedorVideo>
                <Videox muted autoPlay loop>
                    {/* <source src={video1} type="video/mp4"/> */}
                    <source src={video2} type="video/mp4"/>
                </Videox>
            </ContenedorVideo>
            <Titulo>
                <Titulo2>
                    <Welcome>Welcome To</Welcome>
                    <Hcontenedor>
                        <H1>FOOD</H1>
                        <H2>APP</H2>
                    </Hcontenedor>
                </Titulo2>
                <Boton>
                    <H3 to='/home'>Find Your Recipe</H3>
                </Boton>
            </Titulo>
        </Body>
    )
}