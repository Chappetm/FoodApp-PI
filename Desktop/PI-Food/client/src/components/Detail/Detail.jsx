import React from 'react'
import Nav from '../Nav/Nav'
import styled from 'styled-components'

const Contenedor = styled.div`
    height: 100%
`;

const Principal = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    height: 100%;
    width: 100%;
    margin: 10px
`;

const Info = styled.div`
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
`;

const Img = styled.img`
    width: 100%;
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
`;

export default function Detail(){
    return (
        <Contenedor>
            <Nav />
            <Principal>
                <Info>
                    <h2>titulo</h2>
                    <ul>
                        <li>dietas</li>
                        <li>dietas</li> 
                        <li>dietas</li> 
                    </ul>
                    <br />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat numquam corrupti qui facilis, architecto fugit modi ex ea commodi itaque! Pariatur nostrum doloremque iste consectetur dolorum velit animi ratione?</span>
                </Info>
                <Img src="#" alt="image not found" />
            </Principal>
            <div>
                <p>pasos a seguir</p>
            </div>
        </Contenedor>
    )
}