import axios from "axios";
import { GET_DIETS } from ".";

// export default function getDiets(){
//     return async function(dispatch){
//         const response = await axios.get(`http://localhost:3001/diet`)
//         dispatch({
//             type: GET_DIETS,
//             payload: response.data
//         })
//     }
// }

export default function getDiets(){
    return function(dispatch){
        return axios.get(`http://localhost:3001/diet`)
        .then(response => {
            dispatch({
                type: GET_DIETS,
                payload: response.data
            })
        })
    }
}