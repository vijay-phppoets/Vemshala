import {
    SAVE_CART_ADDRESS,
    SAVE_CART_ADDRESS_SUCCESS,
    SAVE_CART_ADDRESS_FAIL,
    SAVE_CART_ADDRESS_RESET,
} from '../action/saveCartAddressAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    cart_id: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_CART_ADDRESS:
            return {
                ...state,
                apiState: "loading",
            }

        case SAVE_CART_ADDRESS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                cart_id: action.response.data.cart_id,
            }

        case SAVE_CART_ADDRESS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case SAVE_CART_ADDRESS_RESET:
            return initialState

        default:
            return state
    }
}
