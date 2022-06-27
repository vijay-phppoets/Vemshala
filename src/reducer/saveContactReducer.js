import {
    SAVE_CONTACT,
    SAVE_CONTACT_SUCCESS,
    SAVE_CONTACT_FAIL,
    SAVE_CONTACT_RESET,
} from '../action/saveContactAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_CONTACT:
            return {
                ...state,
                apiState: "loading",
            }

        case SAVE_CONTACT_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case SAVE_CONTACT_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case SAVE_CONTACT_RESET:
            return initialState

        default:
            return state
    }
}
