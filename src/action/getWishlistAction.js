export const GET_WISH_LIST = 'GET_WISH_LIST'
export const GET_WISH_LIST_SUCCESS = 'GET_WISH_LIST_SUCCESS'
export const GET_WISH_LIST_FAIL = 'GET_WISH_LIST_FAIL'
export const GET_WISH_LIST_RESET = 'GET_WISH_LIST_RESET'

export const getWishlist = (params) => {
    return { type: GET_WISH_LIST, params }
}

export const getWishlistSuccess = (response) => {
    return { type: GET_WISH_LIST_SUCCESS, response }
}

export const getWishlistFail = (response) => {
    return { type: GET_WISH_LIST_FAIL, response }
}

export const getWishlistReset = () => {
    return { type: GET_WISH_LIST_RESET }
}
