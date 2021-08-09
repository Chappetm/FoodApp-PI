import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import getRecipeQuery from '../../actions/getRecipeQuery'

//Styled-components
const Search = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
`;

const Bar = styled.input`
    width: 200px;
    height: 30px;
    margin: 10px;
    background-color: #141414;
    border: 0.5px #f07b3f solid;
    border-top: none;
    border-left: none;
    border-right: none;
    font-family: 'Raleway';
    color: #f07b3f;
    outline: none;
`;

const Find = styled.input`
    height: 40px;
    width: 50px;
    border-radius: 5px;
    font-family: 'Raleway';
    background-color: #141414;
    border-color: f07b3f;
    color: gray;
    border: none;
    cursor: pointer;
    &:hover{
        border: 0.5px #f07b3f solid;
    }
`;
//-------------------------------

export default function SearchBar(){
    const [recipe, setRecipe] = useState('')
    const dispatch = useDispatch()

    function handleChange(event) {
        setRecipe(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setRecipe(''); //limpia el input
        dispatch(getRecipeQuery(recipe));
    }

    return (
        <Search>
            <form 
            onSubmit={(e) => handleSubmit(e)}
            >
                <Bar 
                    type="text"
                    placeholder="Find your recipe" 
                    value={recipe}
                    onChange={(e) => handleChange(e)}
                />
                <Find type="submit" value='Find' />
            </form>
        </Search>
            
        
    )
}