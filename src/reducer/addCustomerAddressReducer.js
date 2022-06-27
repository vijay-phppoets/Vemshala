import {
    ADD_CUSTOMER_ADDRESS,
    ADD_CUSTOMER_ADDRESS_SUCCESS,
    ADD_CUSTOMER_ADDRESS_FAIL,
    ADD_CUSTOMER_ADDRESS_RESET,
} from '../action/addCustomerAddressAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    cart: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CUSTOMER_ADDRESS:
            return {
                ...state,
                apiState: "loading",
            }

        case ADD_CUSTOMER_ADDRESS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                cart: action.response.data.cart,
            }

        case ADD_CUSTOMER_ADDRESS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case ADD_CUSTOMER_ADDRESS_RESET:
            return initialState

        default:
            return state
    }
}
