import { ORDER_BY_SCORE } from ".";

export default function orderByScore(order){
    return {
        type: ORDER_BY_SCORE,
        payload: order
    }
}