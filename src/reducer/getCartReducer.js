import {
    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    GET_CART_RESET,
} from '../action/getCartAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    cart: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CART_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                cart: action.response.data.cart,
            }

        case GET_CART_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_CART_RESET:
            return initialState

        default:
            return state
    }
}
