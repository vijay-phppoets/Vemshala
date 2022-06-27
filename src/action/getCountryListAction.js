export const GET_COUNTRY_LIST = 'GET_COUNTRY_LIST'
export const GET_COUNTRY_LIST_SUCCESS = 'GET_COUNTRY_LIST_SUCCESS'
export const GET_COUNTRY_LIST_FAIL = 'GET_COUNTRY_LIST_FAIL'
export const GET_COUNTRY_LIST_RESET = 'GET_COUNTRY_LIST_RESET'

export const getCountryList = (params) => {
    return { type: GET_COUNTRY_LIST, params }
}

export const getCountryListSuccess = (response) => {
    return { type: GET_COUNTRY_LIST_SUCCESS, response }
}

export const getCountryListFail = (response) => {
    return { type: GET_COUNTRY_LIST_FAIL, response }
}

export const getCountryListReset = () => {
    return { type: GET_COUNTRY_LIST_RESET }
}
