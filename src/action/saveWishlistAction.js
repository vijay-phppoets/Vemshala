export const SAVE_WISHLIST = 'SAVE_WISHLIST'
export const SAVE_WISHLIST_SUCCESS = 'SAVE_WISHLIST_SUCCESS'
export const SAVE_WISHLIST_FAIL = 'SAVE_WISHLIST_FAIL'
export const SAVE_WISHLIST_RESET = 'SAVE_WISHLIST_RESET'

export const saveWishlistDetail = (params) => {
    return { type: SAVE_WISHLIST, params }
}

export const saveWishlistDetailSuccess = (response) => {
    return { type: SAVE_WISHLIST_SUCCESS, response }
}

export const saveWishlistDetailFail = (response) => {
    return { type: SAVE_WISHLIST_FAIL, response }
}

export const saveWishlistDetailReset = () => {
    return { type: SAVE_WISHLIST_RESET }
}
