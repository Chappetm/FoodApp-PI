import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import getRecipes from '../../actions/getRecipes'
import { useDispatch } from 'react-redux'

//Styled-components

const Body = styled.div`
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        flex-direction: column;
        justify-content: space-between;
    `

//-----------------------------------------

export default function Home(props){
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    return (
        <div>
            <Nav />
            <Body>
                <Cards />
            </Body>
            <Footer />
        </div>
    )
}
