import GET_RECIPES from "../actions/getRecipes"

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
        default: 
            return state
    }
}