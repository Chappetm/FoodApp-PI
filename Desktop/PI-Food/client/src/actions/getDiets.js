import axios from "axios";
import { GET_DIETS } from ".";

export default function getDiets(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/diet`)
        dispatch({
            type: GET_DIETS,
            payload: response.data
        })
    }
}