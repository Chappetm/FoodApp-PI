import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import getRecipes from '../../actions/getRecipes'
import { useDispatch } from 'react-redux'

export default function Home(props){
    const Body = styled.div`
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    return (
        <Body>
            <Nav />
            <Cards />
            <Footer />
        </Body>
    )
}
