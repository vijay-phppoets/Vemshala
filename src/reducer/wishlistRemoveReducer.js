import {
    GET_WISH_LIST_REMOVE,
    GET_WISH_LIST_REMOVE_SUCCESS,
    GET_WISH_LIST_REMOVE_FAIL,
    GET_WISH_LIST_REMOVE_RESET,
} from '../action/wishlistRemoveAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WISH_LIST_REMOVE:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_WISH_LIST_REMOVE_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case GET_WISH_LIST_REMOVE_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_WISH_LIST_REMOVE_RESET:
            return initialState

        default:
            return state
    }
}
