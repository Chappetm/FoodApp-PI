import { GET_DIETS, GET_ID, GET_QUERY, GET_RECIPES, POST_RECIPE, FILTER_BY_DIET, ORDER_BY_NAME, ORDER_BY_SCORE, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions"

const initialState = {
    recipesLoaded: [],
    recipeDetail: [],
    newRecipe: [],
    diets: [],
    allRecipes: [],
    favoriteRecipes: []
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
            if(action.payload.length){
                var obj = action.payload[0]
            } else {
                var obj = action.payload
            }
            return {
                ...state,
                recipeDetail: obj
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
            const allRecipes = state.recipesLoaded
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
            let all = state.recipesLoaded
            let sort = action.payload === 'asc' ? all.sort(function(a, b){
                if(a.title > b.title){
                    return 1
                }
                if(b.title > a.title){
                    return -1
                }
                return 0
            }) : all.sort(function(a, b){
                if(a.title > b.title){
                    return -1
                }
                if(b.title > a.title){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                recipesLoaded: sort
            }
        case ORDER_BY_SCORE:
            let todas = state.recipesLoaded
            let order = action.payload === 'asc' ? todas.sort(function(a, b){
                if(a.spoonacularScore > b.spoonacularScore){
                    return 1
                }
                if(b.spoonacularScore > a.spoonacularScore){
                    return -1
                }
                return 0
            }) : todas.sort(function(a, b){
                if(a.spoonacularScore > b.spoonacularScore){
                    return -1
                }
                if(b.spoonacularScore > a.spoonacularScore){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                recipesLoaded: order
            }
        case ADD_FAVORITE:
            const fav = state.allRecipes.filter(el => el.id === action.payload)
            return {
                ...state,
                favoriteRecipes: [...state.favoriteRecipes, fav[0]]
            }
        case REMOVE_FAVORITE:
            const filtrado = state.favoriteRecipes.filter(el => el.id !== action.payload)
            return {
                ...state,
                favoriteRecipes: filtrado
            }
        default: 
            return state
    }
}