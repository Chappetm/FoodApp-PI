import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

//Styled-components

const Card = styled(Link)`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 320px;
    height: 200px;
    border: 1px lightgray solid;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px lightgray;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

const DivImg = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    overflow: hidden;
`;

const DivH1 = styled.div`
    display: flex;
    width: 50%;
`;

const H1 = styled.h1`
    font-size: 15px;
    text-align: center;
`;

const Button = styled.button`
    position: absolute;
    top: 2%;
    right: 2%;
    background-color: #f07b3f;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    color: white;
    font-family: 'Raleway';
    font-weight: 700;
    &:hover{
        background-color: #BD6537
    }
`;
//--------------------------------

export default function CardFav({title, image}){

    return (
        <Card>
            <Button>X</Button>
            <DivH1>
                <H1>{title}</H1>
            </DivH1>
            <DivImg>
                <img src={image} />
            </DivImg>
        </Card>
    )
}