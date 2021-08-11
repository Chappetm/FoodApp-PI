import axios from "axios";
import { POST_RECIPE} from ".";

export default function createRecipe(info){
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/recipe/`, info)
        dispatch({
            type: POST_RECIPE,
            payload: response.data
        })
    }
}