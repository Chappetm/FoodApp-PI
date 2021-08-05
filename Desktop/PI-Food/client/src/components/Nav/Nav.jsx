import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav(props){
    const Navi = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: lightgray;
    `
    const H2 = styled.h2`
        color: orange;
    `
    return (
        <Navi>
            <H2>Comidaaaaaa</H2>
            <SearchBar />
        </Navi>
    )
}