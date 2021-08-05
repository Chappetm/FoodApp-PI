import { GET_RECIPES } from ".";
import axios from "axios";

export default function GET_RECIPES(name){
    return async function(dispatch){
        if(name){
            const response = await axios.get(`http://localhost:3001/recipe/${name}`);
            const finalResponse = response.data;
            return dispatch({
                type: GET_RECIPES,
                payload: finalResponse
            })
        } else {
            const response = await axios.get(`http://localhost:3001/recipe`);
            const finalResponse = response.data;
            return dispatch({
                type: GET_RECIPES,
                payload: finalResponse
            })
        }
    }
}