import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

export default function Home(props){
    const Body = styled.div`
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    `

    useEffect(() => {
        console.log('hola')
    }, [])

    return (
        <Body>
            <Nav />
            <Cards />
            <Footer />
        </Body>
    )
}