import {
    RESET_PASSWORD,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_RESET,
} from '../action/resetPasswordAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RESET_PASSWORD:
            return {
                ...state,
                apiState: "loading",
            }

        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case RESET_PASSWORD_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case RESET_PASSWORD_RESET:
            return initialState

        default:
            return state
    }
}
