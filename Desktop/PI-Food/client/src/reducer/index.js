import { GET_DIETS, GET_ID, GET_QUERY, GET_RECIPES, POST_RECIPE } from "../actions"

const initialState = {
    recipesLoaded: [],
    recipeDetail: [],
    newRecipe: [],
    diets: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_RECIPES: 
            return {
                ...state, 
                recipesLoaded: action.payload
            }
        case GET_QUERY: 
            return {
                ...state,
                recipesLoaded: action.payload
            }
        case GET_ID:
            return {
                ...state,
                recipeDetail: action.payload
            }
        case POST_RECIPE:
            return {
                ...state,
                newRecipe: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        default: 
            return state
    }
}