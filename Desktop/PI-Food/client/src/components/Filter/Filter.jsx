import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import filterRecipesByDiet from '../../actions/filterRecipesByDiet'
import orderByName from '../../actions/orderByName'

//Styled-components

const DivSelect = styled.div`
    margin: 10px;
`;

const Select = styled.select`
    text-transform: capitalize;
    padding: 3px;
    margin: 10px 10px 0 10px;
    border-radius: 2px;
    border: 1px solid #ced4da;
    outline: none;
`;

const Option = styled.option`
    text-transform: capitalize;
`;

//--------------------------------------------

export default function Filter({setCurrentPage, setOrder}) {
    const diets = useSelector(store => store.diets);
    const dispatch = useDispatch();
    
    const handleFilterDiet = (e) => {
        e.preventDefault();
        dispatch(filterRecipesByDiet(e.target.value))
        setCurrentPage(1)
    };

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    };


    return (
        <DivSelect>
            <Select onChange={(e) => {handleFilterDiet(e)}}>
                <Option>All</Option>
                {
                    diets.map(d => <Option>{d}</Option>)
                }
            </Select>
            <Select>
                <Option>All</Option>
                <Option>By Name</Option>
                <Option>By Score</Option>
            </Select>
            <Select onChange={(e) => {handleSort(e)}}>
                <Option value='asc'>Ascending order</Option>
                <Option value='desc'>Descending order</Option>
            </Select>
        </DivSelect>
    )
}