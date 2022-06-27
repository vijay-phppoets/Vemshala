import {
    GET_CUSTOMER_DETAIL,
    GET_CUSTOMER_DETAIL_SUCCESS,
    GET_CUSTOMER_DETAIL_FAIL,
    GET_CUSTOMER_DETAIL_RESET,
} from '../action/getCustomerDetailAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    customer: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMER_DETAIL:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CUSTOMER_DETAIL_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                customer: action.response.data.customer,
            }

        case GET_CUSTOMER_DETAIL_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_CUSTOMER_DETAIL_RESET:
            return initialState

        default:
            return state
    }
}
