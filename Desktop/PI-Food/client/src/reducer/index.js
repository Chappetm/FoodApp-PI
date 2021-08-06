import { GET_QUERY, GET_RECIPES } from "../actions"

const initialState = {
    recipesLoaded: []
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
        default: 
            return state
    }
}