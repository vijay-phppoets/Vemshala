import {
    GET_EXCLUSIVE_PRODUCTS,
    GET_EXCLUSIVE_PRODUCTS_SUCCESS,
    GET_EXCLUSIVE_PRODUCTS_FAIL,
    GET_EXCLUSIVE_PRODUCTS_RESET,
} from '../action/getExclusiveProductsAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    products: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EXCLUSIVE_PRODUCTS:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_EXCLUSIVE_PRODUCTS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                products: action.response.data.list,
            }

        case GET_EXCLUSIVE_PRODUCTS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_EXCLUSIVE_PRODUCTS_RESET:
            return initialState

        default:
            return state
    }
}
