export const GET_CATEGORY_DETAILS = 'GET_CATEGORY_DETAILS'
export const GET_CATEGORY_DETAILS_SUCCESS = 'GET_CATEGORY_DETAILS_SUCCESS'
export const GET_CATEGORY_DETAILS_FAIL = 'GET_CATEGORY_DETAILS_FAIL'
export const GET_CATEGORY_DETAILS_RESET = 'GET_CATEGORY_DETAILS_RESET'

export const getCategoryDetails = (params) => {
    return { type: GET_CATEGORY_DETAILS, params }
}

export const getCategoryDetailsSuccess = (response) => {
    return { type: GET_CATEGORY_DETAILS_SUCCESS, response }
}

export const getCategoryDetailsFail = (response) => {
    return { type: GET_CATEGORY_DETAILS_FAIL, response }
}

export const getCategoryDetailsReset = () => {
    return { type: GET_CATEGORY_DETAILS_RESET }
}
