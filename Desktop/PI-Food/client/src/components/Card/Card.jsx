import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


//Styled-components
const Cardiv = styled.div`
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 58% 15% 27%;
        width: 350px;
        height: 420px;
        border: 1px lightgray solid;
        margin: 20px;
        padding: 0px;
        border-radius: 5px;
        box-shadow: 5px 5px 20px lightgray;
    `;
    const Diet = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        box-sizing:border-box;
        font-family: 'Raleway';
        text-transform: capitalize;
        word-wrap: break-word;
        font-size: 14px;
    `;

    const DivH3 = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const H3 = styled(Link)`
        margin: 10px;
        padding: 0;
        text-decoration: none;
        text-transform: capitalize;
        color: black;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Raleway';
        text-align: center;
    `;
    
    const DivImg = styled.div`
        margin: 10px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    `;

    const Img = styled.img`
        border-radius: 1px;
        height: 231px;
        width: 330px;
        object-fit: fill;
    `;
//-------------------------------------

export default function Card({title, image, diet, id}){

    if(typeof diet[0] === 'object'){
        diet = diet.map(el => el.name)
    }

    return (
       <Cardiv>
        <DivImg>
            <Img src={image} alt="img not found" />
        </DivImg>
        <DivH3>
            <H3 to={`/detail/${id}`}>{title}</H3>
        </DivH3>
        <Diet>
            <ul>{diet.map(d => <li>{d}</li>)}</ul>
        </Diet>
       </Cardiv> 
    )
}