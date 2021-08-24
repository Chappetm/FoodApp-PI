import { FILTER_BY_DIET} from ".";

export default function filterRecipesByStatus(estado){
    return {
        type: FILTER_BY_DIET,
        payload: estado
    }
}