import { GET_RECIPES } from ".";
import axios from "axios";

export default function getRecipes(){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/recipe`);
            dispatch({
                type: GET_RECIPES,
                payload: response.data
        });
        } catch (error) {
            console.log(error)
        }
    }
}
