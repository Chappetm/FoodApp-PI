import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import getRecipeQuery from '../../actions/getRecipeQuery'
import lupa from '../../media/lupa.png'

//Styled-components
const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Search = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 33%;
`;

const Bar = styled.input`
    width: 200px;
    height: 30px;
    margin: 10px;
    margin-right: 0;
    background-color: #141414;
    border: 0.5px #f07b3f solid;
    border-top: none;
    border-left: none;
    border-right: none;
    font-family: 'Raleway';
    color: #f07b3f;
    outline: none;
`;

const Find = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 5px;
    font-family: 'Raleway';
    background-color: #141414;
    border-color: f07b3f;
    color: gray;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
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
            <Form 
            onSubmit={(e) => handleSubmit(e)}
            >
                <Bar 
                    type="text"
                    placeholder="Search..." 
                    value={recipe}
                    onChange={(e) => handleChange(e)}
                    spellcheck="false"
                />
                <Find type="submit">
                    <img src={lupa} alt="Search" width='100%' height='100%'/>
                </Find>
            </Form>
        </Search>
            
        
    )
}