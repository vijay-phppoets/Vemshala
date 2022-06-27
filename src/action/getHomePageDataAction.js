export const GET_HOME_PAGE_DATA = 'GET_HOME_PAGE_DATA'
export const GET_HOME_PAGE_DATA_SUCCESS = 'GET_HOME_PAGE_DATA_SUCCESS'
export const GET_HOME_PAGE_DATA_FAIL = 'GET_HOME_PAGE_DATA_FAIL'
export const GET_HOME_PAGE_DATA_RESET = 'GET_HOME_PAGE_DATA_RESET'

export const getHomePageData = (params) => {
    return { type: GET_HOME_PAGE_DATA, params }
}

export const getHomePageDataSuccess = (response) => {
    return { type: GET_HOME_PAGE_DATA_SUCCESS, response }
}

export const getHomePageDataFail = (response) => {
    return { type: GET_HOME_PAGE_DATA_FAIL, response }
}

export const getHomePageDataReset = () => {
    return { type: GET_HOME_PAGE_DATA_RESET }
}
