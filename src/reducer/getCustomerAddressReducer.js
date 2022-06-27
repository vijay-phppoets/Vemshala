import {
    GET_CUSTOMER_ADDRESS,
    GET_CUSTOMER_ADDRESS_SUCCESS,
    GET_CUSTOMER_ADDRESS_FAIL,
    GET_CUSTOMER_ADDRESS_RESET,
} from '../action/getCustomerAddressAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    customer_address: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMER_ADDRESS:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_CUSTOMER_ADDRESS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                customer_address: action.response.data.customer_address,
            }

        case GET_CUSTOMER_ADDRESS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_CUSTOMER_ADDRESS_RESET:
            return initialState

        default:
            return state
    }
}
