import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import removeFavorite from '../../actions/removeFavorite';

//Styled-components

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 280px;
    height: 330px;
    border: 1px lightgray solid;
    margin: 30px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px lightgray;
    text-decoration: none;
    color: black;
    overflow: hidden;
`;

const DivImg = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    overflow: hidden;
`;

const DivH1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const H1 = styled.h1`
    font-size: 20px;
    text-align: center;
`;

const Img = styled.img`
    width:400px;
    height:300px;
`;

const ButtonDelete = styled.button`
    padding: 3px;
    width: 74%;
    top: 60%;
    background-color: rgba(255, 255, 255, 0.9);;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    color: #f07b3f;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1em;
    :hover {
        color: rgba(255, 255, 255, 1);
        background-color: #f07b3f;
        transition: all 0.8s ease;
    }
`;

const ButtonDetail = styled(Link)`
    text-decoration:none;
    text-align: center;
    padding: 3px;
    margin: 10px;
    width: 71%;
    top: 40%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    color: #f07b3f;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1em;
    :hover {
        color: rgba(255, 255, 255, 1);
        background-color: #f07b3f;
        transition: all 0.8s ease;
    }
`;

//--------------------------------

export default function CardFav({title, image, id}){
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeFavorite(id))
    }

    return (
        <Card>
            <DivImg>
                <Img src={image} />
            </DivImg>
            <DivH1>
                <H1>{title}</H1>
            </DivH1>
            <ButtonDelete onClick={handleClick}>Remove to Favorites</ButtonDelete>
            <ButtonDetail to={`/detail/${id}`}>Details</ButtonDetail>
        </Card>
    )
}