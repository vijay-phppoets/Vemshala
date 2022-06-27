import {
    REMOVE_COUPON,
    REMOVE_COUPON_SUCCESS,
    REMOVE_COUPON_FAIL,
    REMOVE_COUPON_RESET,
} from '../action/removeCouponAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REMOVE_COUPON:
            return {
                ...state,
                apiState: "loading",
            }

        case REMOVE_COUPON_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case REMOVE_COUPON_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case REMOVE_COUPON_RESET:
            return initialState

        default:
            return state
    }
}
