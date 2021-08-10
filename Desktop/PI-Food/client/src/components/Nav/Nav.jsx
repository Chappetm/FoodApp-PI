import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import { Link, NavLink} from 'react-router-dom'; 
import home from '../../media/home.png'
import create from '../../media/create.png'

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
`;

const DivCreate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Links = styled(NavLink)`
    margin-right: 30px;
    text-decoration: none;
    color: #f07b3f;
    padding: 7px;
    font-family: 'Raleway';
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

export default function Nav(props){
    

    return (
        <Navi>
            <Titulo>
                <H2 to='/'>FOOD</H2>
                <H3 to='/'>APP</H3>
            </Titulo>
            <DivButtons>
                <DivHome>
                    <img src={home} alt="" width='15px' height='15px' />
                    <Links to='/home' activeClassName='active'>Home</Links>
                </DivHome>
                <DivCreate>
                    <img src={create} alt="" width='15px' height='15px' />
                <Links to='/create' activeClassName='active'>Create</Links>
                </DivCreate>
            </DivButtons>
            <SearchBar />
        </Navi>
    )
}