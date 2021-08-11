import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

//Styled-components

const DivSelect = styled.div`
    margin: 10px;
`;

const Select = styled.select`
    text-transform: capitalize;
    padding: 3px;
    margin: 5px;
    border-radius: 2px;
    border: 1px solid #ced4da;
    outline: none;
`;

const Option = styled.option`
    text-transform: capitalize;
`;

//--------------------------------------------

export default function Filter() {
    const diets = useSelector(store => store.diets)

    return (
        <DivSelect>
            <Select name="" id="">
                {
                    diets.map(d => <Option>{d}</Option>)
                }
            </Select>
            <Select>
                <Option>Por nombre</Option>
                <Option>Por puntuación</Option>
            </Select>
            <Select>
                <Option>Ascendente</Option>
                <Option>Descendente</Option>
            </Select>
        </DivSelect>
    )
}