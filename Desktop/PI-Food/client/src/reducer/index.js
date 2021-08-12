import { GET_DIETS, GET_ID, GET_QUERY, GET_RECIPES, POST_RECIPE, FILTER_BY_DIET, ORDER_BY_NAME } from "../actions"

const initialState = {
    recipesLoaded: [],
    recipeDetail: [],
    newRecipe: [],
    diets: [],
    allRecipes: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_RECIPES: 
            return {
                ...state, 
                recipesLoaded: action.payload,
                allRecipes: action.payload
            }
        case GET_QUERY: 
            return {
                ...state,
                recipesLoaded: action.payload,
                allRecipes: action.payload
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
        case FILTER_BY_DIET: 
            const allRecipes = state.allRecipes
            const mp = allRecipes.map(d => {
                if(typeof d.diets[0] === 'object'){
                    return {
                        ...d,
                        diets: d.diets.map(r => r.name)
                    }
                }
                return d;
            })

            const filter = action.payload === 'All' ? mp : mp.filter(r => r.diets.includes(action.payload))
            return {
                ...state,
                recipesLoaded: filter
            }
        case ORDER_BY_NAME:
            console.log('ENTREEEEEEEEEEEEE', action.payload)
            const sort = action.payload === 'asc' ? state.allRecipes.sort((a, b) => {
                if(a.name > b.name){
                    return 1
                }
                if(b.name > a.name){
                    return -1
                }
                return 0
            }) : state.allRecipes.sort((a, b) => {
                    if(a.name > b.name){
                        return -1
                    }
                    if(b.name > a.name){
                        return 1
                    }
                    return 0
            })

            return {
                ...state,
                recipesLoaded: sort
            }
            
        default: 
            return state
    }
}