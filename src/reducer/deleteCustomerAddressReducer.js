import {
    DELETE_CUSTOMER_ADDRESS,
    DELETE_CUSTOMER_ADDRESS_SUCCESS,
    DELETE_CUSTOMER_ADDRESS_FAIL,
    DELETE_CUSTOMER_ADDRESS_RESET,
} from '../action/deleteCustomerAddressAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_CUSTOMER_ADDRESS:
            return {
                ...state,
                apiState: "loading",
            }

        case DELETE_CUSTOMER_ADDRESS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message
            }

        case DELETE_CUSTOMER_ADDRESS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response.data.message || strings.api_err_msg,
            }

        case DELETE_CUSTOMER_ADDRESS_RESET:
            return initialState

        default:
            return state
    }
}
