import { REMOVE_FAVORITE } from ".";

export default function(id){
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}