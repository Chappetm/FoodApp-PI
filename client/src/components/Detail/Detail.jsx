import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import getRecipeId from '../../actions/getRecipeId';
import addFavorite from '../../actions/addFavorite';
import loader from '../../media/loader3.gif'
import porciones from '../../media/cubiertos.png'
import world from '../../media/worldwide.png'
import healthScore from '../../media/healthScore.png'
import serving from '../../media/serving.png'
import clock from '../../media/clock.png'
import score from '../../media/score.png'
import diets from '../../media/diet.png'
import summary from '../../media/summary.png'
import steps from '../../media/steps.png'

//Styled-components

const Contenedor = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway';
    font-size: 18px;
`;

const Principal = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 10px;
`;

const DivImg = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

const DivH1Img = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const H2 = styled.h2`
    font-family: 'Pacifico';
    font-size: 45px;
    font-weight: 100;
    text-align: center;
    color:#626262;
    width: 100%;
    text-transform: capitalize;
`;

const H4 = styled.h4`
    margin: 3px;
    font-size: 25px;
`;

const DivH2Diets = styled.div`
    width: 55%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

const DivDiets = styled.div`
    width: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-transform: capitalize;
`;

const DivSummary = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    word-break: break-word;
`;

const Summary = styled.span`
    cursor: default;
    a {
        text-decoration: none;
        color: black;
        pointer-events: none;
    }
`;

const Img = styled.img`
    margin-left: 20px;
    width: 100%;
    margin-top: 20px;
`;

const DivCentral = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
`;

const DivCentral1 = styled.div`
    margin-left: 100px;
    height: auto;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
`;

const DivCentral2 = styled.div`
    padding-left: 20px;
    height: 100%;
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
`;

const DivTitulos = styled.div`
    align-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const Ul = styled.ul`
    margin: 0;
`;

const ButtonFav = styled.button`
    background-color: #f07b3f;
    height: 40px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    box-shadow: 5px 5px 20px lightgray;
    color: white;
    font-family: 'Raleway';
    font-weight: 700;
    &:hover{
        background-color: #BD6537
    }
`;

const Li = styled.li`
    text-transform: capitalize;
`;

//-------------------------------------

export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeId(props.match.params.id))
    }, [])

    const detail = useSelector(store => store.recipeDetail)

    const funcDescription = () => {
        return  {__html: detail.summary};
    }

    if(detail.diets && typeof detail.diets[0] === 'object'){
        var diet = detail.diets.map(el => el.name)
    } else {
        var diet = detail.diets
    }

    const handleClic = (e) => {
        e.preventDefault()
        dispatch(addFavorite(detail.id))
        alert('Recipe add to favorites')
    }

    return (
        <Contenedor>
            <Nav />
            {
                (detail.length === 0)
                    ? <img src={loader} alt='Cargando...' />
                    : <Principal>
                        <H2>{detail.title}</H2>
                        <DivH1Img>
                            <DivH2Diets>
                                <br />
                                <DivSummary>
                                    <DivTitulos><img src={summary} width='30px' height='30px'/><H4> Summary:</H4></DivTitulos>
                                    <br />
                                    <Summary dangerouslySetInnerHTML={funcDescription()} />
                                </DivSummary>
                            </DivH2Diets>
                            <DivImg>
                                <Img src={detail.image} alt="image not found" />
                            </DivImg>
                        </DivH1Img>
                        <br />
                        <DivCentral>
                            <DivCentral1>
                                <DivTitulos><img src={clock} width='30px' height='30px'/><H4> Cooking time: </H4><p>{detail.readyInMinutes} min.</p></DivTitulos>
                                <DivTitulos><img src={serving} width='30px' height='30px'/><H4> Servings:</H4> <p>{detail.servings}</p></DivTitulos>
                                <DivDiets>
                                    <DivTitulos><img src={diets} width='30px' height='30px'/><H4>Diets:</H4></DivTitulos>
                                    {
                                        detail.diets
                                            ? <Ul>{diet.map(d => <li>{d}</li>)}</Ul>
                                            : <span>No diets</span> 
                                    }
                                </DivDiets>
                            </DivCentral1>
                            <DivCentral2>
                                <DivTitulos><img src={score} width='30px' height='30px'/><H4> Score:</H4> <p>{detail.spoonacularScore}</p></DivTitulos>
                                <DivTitulos><img src={healthScore} width='30px' height='30px'/><H4> Health score: </H4><p>{detail.healthScore}</p></DivTitulos>
                                <DivTitulos><img src={world} width='30px' height='30px'/><H4> Cuisines:</H4></DivTitulos>
                                    {(detail.cuisines && typeof detail.cuisines === 'object') 
                                    ? <ul>{detail.cuisines.map(el => <Li>{el}</Li>)}</ul> 
                                    : detail.cuisines
                                        ? <ul><Li>{detail.cuisines}</Li></ul>
                                        : <p>-</p>
                                    }
                            </DivCentral2>
                        </DivCentral>
                        <br />
                        <br />
                        <DivSummary>
                            <DivTitulos><img src={steps} width='30px' height='30px' /><H4> Steps:</H4></DivTitulos>
                            {
                                (detail.analyzedInstructions) 
                                ? (typeof detail.analyzedInstructions  === 'object')
                                    ? <ul>{detail.analyzedInstructions.map(d => <li>{d}</li>)}</ul>
                                    : <p>{detail.analyzedInstructions}</p>
                                : <p>No steps</p>
                            }
                        </DivSummary>
                        <br />
                        <br />
                        <ButtonFav onClick={(e) => handleClic(e)}>ADD TO FAVORITES</ButtonFav>
                        <br />
                    </Principal>
            }
            <Footer />
        </Contenedor>
    )
}