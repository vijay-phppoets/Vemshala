import {
    CHECK_COUPON,
    CHECK_COUPON_FAIL,
    CHECK_COUPON_SUCCESS,
    CHECK_COUPON_RESET
} from '../action/checkCouponAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    list: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECK_COUPON:
            return {
                ...state,
                apiState: "loading",
            }

        case CHECK_COUPON_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                list: action.response.data.list,
            }

        case CHECK_COUPON_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case CHECK_COUPON_RESET:
            return initialState

        default:
            return state
    }
}
