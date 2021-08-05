import React from 'react'
import styled from 'styled-components'

export default function Cards(){
    const Body = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center
    `
    return (
        <Body>
            <span>CARDS</span>
        </Body>
    )
}