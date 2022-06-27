import {
    GET_WISH_LIST,
    GET_WISH_LIST_SUCCESS,
    GET_WISH_LIST_FAIL,
    GET_WISH_LIST_RESET,
} from '../action/getWishlistAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    list: [],
    total_records: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WISH_LIST:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_WISH_LIST_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                list: action.response.data.list,
                total_records: action.response.data.total_records,
            }

        case GET_WISH_LIST_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_WISH_LIST_RESET:
            return initialState

        default:
            return state
    }
}
