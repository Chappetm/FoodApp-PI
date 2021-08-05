import React from 'react'
import styled from 'styled-components'

export default function Footer(){
    const Footer = styled.div`
        height: 100px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: lightgrey
    `;

    return (
        <Footer>
            <span>Este es el footer</span>
        </Footer>
    )
}