import {
    PLACE_COD_ORDER,
    PLACE_COD_ORDER_SUCCESS,
    PLACE_COD_ORDER_FAIL,
    PLACE_COD_ORDER_RESET,
} from '../action/placeCodOrderAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PLACE_COD_ORDER:
            return {
                ...state,
                apiState: "loading",
            }

        case PLACE_COD_ORDER_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case PLACE_COD_ORDER_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case PLACE_COD_ORDER_RESET:
            return initialState

        default:
            return state
    }
}
