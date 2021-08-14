import React from 'react'
import styled from 'styled-components'

//Styled-components

const DivFooter = styled.div`
        height: 150px;
        width: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #141414;
        color: #f07b3f;
`;

//---------------------------------------
export default function Footer(){

    return (
        <DivFooter>
            <span>Este es el footer</span>
        </DivFooter>
    )
}