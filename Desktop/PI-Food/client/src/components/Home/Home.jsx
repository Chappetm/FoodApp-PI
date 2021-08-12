import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Paged from '../Paged/Paged'
import Filter from '../Filter/Filter'
import styled from 'styled-components'
import getRecipes from '../../actions/getRecipes'
import getDiets from '../../actions/getDiets'
import { useDispatch, useSelector } from 'react-redux'

//Styled-components

const Body = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

//-----------------------------------------

export default function Home(props){
    
    const dispatch = useDispatch();
    const recipes = useSelector(store => store.recipesLoaded)
    const [currentPage, setCurrentPage] = useState(1) //Pagina actual (inicia en la 1)
    const [recipePerPage, setRecipePerPage] = useState(9) //Cantidad de recetas por pagina
    const indexOfLastRecipe = currentPage * recipePerPage //'Indice' de la ultima receta
    const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage //'Indice' de la primer receta
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //Corta las recetas a mostrar por pagina

    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets());
    }, []);

    return (
        <div>
            <Nav />
            <Body>
                <Filter />
                <Cards currentRecipes={currentRecipes}/>
            </Body>
            <Paged 
                recipePerPage={recipePerPage}
                recipes={recipes.length}
                paged={paged}
                currentPage={currentPage}
            />
            <Footer />
        </div>
    )
}
