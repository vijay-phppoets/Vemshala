export const GET_WISH_LIST_REMOVE = 'GET_WISH_LIST_REMOVE'
export const GET_WISH_LIST_REMOVE_SUCCESS = 'GET_WISH_LIST_REMOVE_SUCCESS'
export const GET_WISH_LIST_REMOVE_FAIL = 'GET_WISH_LIST_REMOVE_FAIL'
export const GET_WISH_LIST_REMOVE_RESET = 'GET_WISH_LIST_REMOVE_RESET'

export const wishlistRemove = (params) => {
    return { type: GET_WISH_LIST_REMOVE, params }
}

export const wishlistRemoveSuccess = (response) => {
    return { type: GET_WISH_LIST_REMOVE_SUCCESS, response }
}

export const wishlistRemoveFail = (response) => {
    return { type: GET_WISH_LIST_REMOVE_FAIL, response }
}

export const wishlistRemoveReset = () => {
    return { type: GET_WISH_LIST_REMOVE_RESET }
}
