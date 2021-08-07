import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


//Styled-components
const Cardiv = styled.div`
        display: grid;
        flex-direction: column;
        align-items:center;
        justify-content: space-around;
        width: 350px;
        height: 420px;
        border: 1px lightgray solid;
        margin: 20px;
        padding: 0px;
        border-radius: 5px;
    `;
    const Diet = styled.div`
        width: 100%;
        box-sizing:border-box;
        font-family: 'Raleway';
        text-transform: capitalize;
    `;
    const H3 = styled(Link)`
        margin: 10px;
        padding: 0;
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Raleway';
    `;
    
    const DivImg = styled.div`
        margin: 10px;
        display: flex;
        justify-content: center;
    `;

    const Img = styled.img`
        border-radius: 5px;
    `
//-------------------------------------

export default function Card({title, image, diet, id}){

    return (
       <Cardiv>
        <DivImg>
            <Img src={image} alt="img not found" />
        </DivImg>
        <H3 to={`/detail/${id}`}>{title}</H3>
        <Diet>
            <ul>{diet.map(d => <li>{d}</li>)}</ul>
        </Diet>
       </Cardiv> 
    )
}