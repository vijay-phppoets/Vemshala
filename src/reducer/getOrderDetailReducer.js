import {
    GET_ORDER_DETAIL,
    GET_ORDER_DETAIL_SUCCESS,
    GET_ORDER_DETAIL_FAIL,
    GET_ORDER_DETAIL_RESET,
} from '../action/getOrderDetailAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    order: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDER_DETAIL:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_ORDER_DETAIL_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                order: action.response.data.order,
            }

        case GET_ORDER_DETAIL_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_ORDER_DETAIL_RESET:
            return initialState

        default:
            return state
    }
}
