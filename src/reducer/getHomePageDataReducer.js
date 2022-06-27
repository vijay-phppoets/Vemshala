import {
    GET_HOME_PAGE_DATA,
    GET_HOME_PAGE_DATA_SUCCESS,
    GET_HOME_PAGE_DATA_FAIL,
    GET_HOME_PAGE_DATA_RESET,
} from '../action/getHomePageDataAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    sliderList: [],
    testimonialList: [],
    newArvlPrds: [],
    exclvsPrds: [],
    onSalePrds: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOME_PAGE_DATA:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_HOME_PAGE_DATA_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                sliderList: action.response.data.sliderList,
                testimonialList: action.response.data.testimonialList,
                newArvlPrds: action.response.data.newArvlPrds,
                exclvsPrds: action.response.data.exclvsPrds,
                onSalePrds: action.response.data.onSalePrds,
            }

        case GET_HOME_PAGE_DATA_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_HOME_PAGE_DATA_RESET:
            return initialState

        default:
            return state
    }
}
