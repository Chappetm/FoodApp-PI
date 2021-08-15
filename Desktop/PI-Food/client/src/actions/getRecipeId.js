import { GET_ID } from ".";
import axios from "axios";

export default function getRecipeId(id){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/recipe/${id}`)
        console.log(response.data)
        dispatch({
            type: GET_ID,
            payload: response.data
        })
    }
}