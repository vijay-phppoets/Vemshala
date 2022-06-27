import {
    UPDATE_CART,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAIL,
    UPDATE_CART_RESET,
} from '../action/updateCartAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    cart_id: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                apiState: "loading",
            }

        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                cart_id: action.response.data.cart_id,
            }

        case UPDATE_CART_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case UPDATE_CART_RESET:
            return initialState

        default:
            return state
    }
}
