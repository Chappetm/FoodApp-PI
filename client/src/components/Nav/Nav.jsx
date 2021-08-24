import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import { Link, NavLink} from 'react-router-dom'; 
import recipes from '../../media/recipes.png'
import create from '../../media/create.png'
import favorite from '../../media/favorito.png'
import getRecipes from '../../actions/getRecipes'

//Styled-components

const Navi = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #141414;
    height: 120px;
    width: 100%;
`;

const Titulo = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H2 = styled(Link)`
    color: #f07b3f;
    font-family: 'Raleway';
    font-size: 60px;
    font-weight: 100;
    margin: 0;
    padding: 0;
    text-decoration: none;
`;

const H3 = styled(Link)`
    color: #f07b3f;
    font-family: 'Raleway';
    font-size: 60px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-decoration: none;
`;

const DivButtons = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;

const DivCreate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;

const Links = styled(NavLink)`
    margin-right: 30px;
    text-decoration: none;
    color: #f07b3f;
    padding: 7px;
    font-family: 'Raleway';
    font-size: 1.2em;
    &:hover{
        border: 2px #f07b3f solid;
        border-top: none;
        border-left: none;
        border-right: none;
        padding-bottom: 5px;
    }
    &.active{
        border: 2px #f07b3f solid;
        border-top: none;
        border-left: none;
        border-right: none;
        padding-bottom: 5px;
    }
`;


//---------------------------------------

export default function Nav(){

    const dispatch = useDispatch();

    const todasRecetas = () => {
        dispatch(getRecipes())
    }

    return (
        <Navi>
            <Titulo>
                <H2 to='/'>FOOD</H2>
                <H3 to='/'>APP</H3>
            </Titulo>
            <DivButtons>
                <DivHome>
                    <img src={recipes} alt="" width='20px' height='20px' />
                    <Links to='/home' activeClassName='active' onClick={todasRecetas}>Recipes</Links>
                </DivHome>
                <DivCreate>
                    <img src={create} alt="" width='20px' height='20px' />
                    <Links to='/create' activeClassName='active'>Create</Links>
                </DivCreate>
                <DivHome>
                    <img src={favorite} alt="" width='20px' height='20px' />
                    <Links to='/favorite' activeClassName='active'>Favorites</Links>
                </DivHome>
            </DivButtons>
            <SearchBar />
        </Navi>
    )
}