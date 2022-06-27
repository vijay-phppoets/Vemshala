import {
    SAVE_WISHLIST,
    SAVE_WISHLIST_SUCCESS,
    SAVE_WISHLIST_FAIL,
    SAVE_WISHLIST_RESET,
} from '../action/saveWishlistAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "", 
    product_id: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_WISHLIST:
            return {
                ...state,
                apiState: "loading",
            }

        case SAVE_WISHLIST_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message, 
                product_id: action.response.data.product_id, 
            }

        case SAVE_WISHLIST_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
                product_id: action.response.data.product_id
            }

        case SAVE_WISHLIST_RESET:
            return initialState

        default:
            return state
    }
}
