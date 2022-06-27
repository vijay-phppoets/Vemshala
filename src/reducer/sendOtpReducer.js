import {
    SEND_OTP,
    SEND_OTP_SUCCESS,
    SEND_OTP_FAIL,
    SEND_OTP_RESET,
} from '../action/sendOtpAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    customer: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEND_OTP:
            return {
                ...state,
                apiState: "loading",
            }

        case SEND_OTP_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                customer: action.response.data.customer,
            }

        case SEND_OTP_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case SEND_OTP_RESET:
            return initialState

        default:
            return state
    }
}
