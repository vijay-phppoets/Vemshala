import {
    GET_CATEGORY_DETAILS,
    GET_CATEGORY_DETAILS_SUCCESS,
    GET_CATEGORY_DETAILS_FAIL,
    GET_CATEGORY_DETAILS_RESET,
} from '../action/getCategoryDetailsAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    category: {},
    children: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_DETAILS:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CATEGORY_DETAILS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                category: action.response.data.category,
                children: action.response.data.children,
            }

        case GET_CATEGORY_DETAILS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_CATEGORY_DETAILS_RESET:
            return initialState

        default:
            return state
    }
}
