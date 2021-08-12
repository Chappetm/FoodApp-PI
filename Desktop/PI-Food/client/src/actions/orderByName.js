import { ORDER_BY_NAME } from ".";

export default function orderByName(order){
    return {
        type: ORDER_BY_NAME,
        payload: order
    }
}