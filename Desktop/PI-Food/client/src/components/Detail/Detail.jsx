import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import getRecipeId from '../../actions/getRecipeId';

const Contenedor = styled.div`
    height: 100%;
`;

const Principal = styled.div`
    display: grid;
    grid-template-columns: 5% 48% 2% 40% 5%;
    grid-template-rows: 5% 60% 30% 5%;
    height: 100%;
    width: 100%;
    margin: 10px;
`;

const Info = styled.div`
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const Img = styled.img`
    width: 100%;
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const Steps = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
`;

export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeId(props.match.params.id))
    }, [])

    const detail = useSelector(store => store.recipeDetail)

    console.log(detail.analyzedInstructions)

    return (
        <Contenedor>
            <Nav />
            <Principal>
                <Info>
                    <h2>{detail.title}</h2>
                    <ul>{
                            detail.diets
                                ? detail.diets.map(d => <li>{d}</li>)
                                : <span>No diets</span> 
                        }</ul>
                    <br />
                    <span>{detail.summary}</span>
                </Info>
                <Img src={detail.image} alt="image not found" />
                <h5>puntuacion</h5>
                <h5>nivel de comida saludable</h5>
                <Steps>
                    <h4>Steps:</h4>
                    <ul>{
                            detail.analyzedInstructions && detail.analyzedInstructions  !== 'No se encontraron datos'
                            ? detail.analyzedInstructions.map(d => <li>{d}</li>)
                            : <span>No steps</span>
                    }</ul>
                </Steps>
            </Principal>
            <Footer />
        </Contenedor>
    )
}