import {
    CREATE_CUSTOMER,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAIL,
    CREATE_CUSTOMER_RESET,
} from '../action/createCustomerAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    customer: {},
    token: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return {
                ...state,
                apiState: "loading",
            }

        case CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                customer: action.response.data.customer,
                token: action.response.data.token,
            }

        case CREATE_CUSTOMER_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case CREATE_CUSTOMER_RESET:
            return initialState

        default:
            return state
    }
}
