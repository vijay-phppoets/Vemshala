import {
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAIL,
    GET_PRODUCT_DETAIL_RESET,
} from '../action/getProductDetailAction'
import strings from "../strings.json"


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    product: {},
    images: {},
    categories: {},
    description_list: [],
    attributes: [],
    variants: [],
    relatedProds: [],
    is_wishlisted: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                apiState: "loading",
            }

        case GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                apiState: "success",
                message: action.response.data.message,
                product: action.response.data.product,
                images: action.response.data.images,
                categories: action.response.data.categories,
                description_list: action.response.data.description_list,
                attributes: action.response.data.attributes,
                variants: action.response.data.variants,
                relatedProds: action.response.data.relatedProds,
                is_wishlisted: action.response.data.is_wishlisted,
            }

        case GET_PRODUCT_DETAIL_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message || strings.api_err_msg,
            }

        case GET_PRODUCT_DETAIL_RESET:
            return initialState

        default:
            return state
    }
}
