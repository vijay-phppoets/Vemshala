import {
    GET_OFFER,
    GET_OFFER_SUCCESS,
    GET_OFFER_FAIL,
    GET_OFFER_RESET,
} from '../action/getOfferAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_OFFER:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_OFFER_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
            }

        case GET_OFFER_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_OFFER_RESET:
            return initialState

        default:
            return state
    }
}
