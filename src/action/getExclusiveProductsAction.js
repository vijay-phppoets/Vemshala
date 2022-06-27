export const GET_EXCLUSIVE_PRODUCTS = 'GET_EXCLUSIVE_PRODUCTS'
export const GET_EXCLUSIVE_PRODUCTS_SUCCESS = 'GET_EXCLUSIVE_PRODUCTS_SUCCESS'
export const GET_EXCLUSIVE_PRODUCTS_FAIL = 'GET_EXCLUSIVE_PRODUCTS_FAIL'
export const GET_EXCLUSIVE_PRODUCTS_RESET = 'GET_EXCLUSIVE_PRODUCTS_RESET'

export const getExclusiveProducts = (params) => {
    return { type: GET_EXCLUSIVE_PRODUCTS, params }
}

export const getExclusiveProductsSuccess = (response) => {
    return { type: GET_EXCLUSIVE_PRODUCTS_SUCCESS, response }
}

export const getExclusiveProductsFail = (response) => {
    return { type: GET_EXCLUSIVE_PRODUCTS_FAIL, response }
}

export const getExclusiveProductsReset = () => {
    return { type: GET_EXCLUSIVE_PRODUCTS_RESET }
}
