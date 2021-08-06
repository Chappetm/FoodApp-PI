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
    `
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
                <input 
                    type="text"
                    placeholder="Find your recipe" 
                    value={recipe}
                    onChange={(e) => handleChange(e)}
                />
                <input type="submit" value='Find' />
            </form>
        </Search>
            
        
    )
}