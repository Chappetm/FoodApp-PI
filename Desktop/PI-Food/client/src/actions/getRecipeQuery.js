import axios from "axios";
import { GET_QUERY } from ".";

export default function getRecipeQuery(name){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/recipe?name=${name}`)
            dispatch({
                type: GET_QUERY,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}