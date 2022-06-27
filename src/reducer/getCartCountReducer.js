import {
    GET_CART_COUNT,
    GET_CART_COUNT_SUCCESS,
    GET_CART_COUNT_FAIL,
    GET_CART_COUNT_RESET,
} from '../action/getCartCountAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    count: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CART_COUNT:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CART_COUNT_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                count: action.response.data.count,
            }

        case GET_CART_COUNT_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_CART_COUNT_RESET:
            return initialState

        default:
            return state
    }
}
