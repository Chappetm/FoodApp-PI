import { ADD_FAVORITE } from ".";

export default function addFavorite(id){
    return {
        type: ADD_FAVORITE,
        payload: id
    }
}