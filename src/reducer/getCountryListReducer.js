import {
    GET_COUNTRY_LIST,
    GET_COUNTRY_LIST_SUCCESS,
    GET_COUNTRY_LIST_FAIL,
    GET_COUNTRY_LIST_RESET,
} from '../action/getCountryListAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    list: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY_LIST:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_COUNTRY_LIST_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                list: action.response.data.list,
            }

        case GET_COUNTRY_LIST_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_COUNTRY_LIST_RESET:
            return initialState

        default:
            return state
    }
}
