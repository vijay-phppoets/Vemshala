import {
    GET_INVOICE,
    GET_INVOICE_SUCCESS,
    GET_INVOICE_FAIL,
    GET_INVOICE_RESET,
} from '../action/getInvoiceAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    data: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INVOICE:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_INVOICE_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                data: action.response.data.order,
            }

        case GET_INVOICE_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_INVOICE_RESET:
            return initialState

        default:
            return state
    }
}
