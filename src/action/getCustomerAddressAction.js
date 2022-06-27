export const GET_CUSTOMER_ADDRESS = 'GET_CUSTOMER_ADDRESS'
export const GET_CUSTOMER_ADDRESS_SUCCESS = 'GET_CUSTOMER_ADDRESS_SUCCESS'
export const GET_CUSTOMER_ADDRESS_FAIL = 'GET_CUSTOMER_ADDRESS_FAIL'
export const GET_CUSTOMER_ADDRESS_RESET = 'GET_CUSTOMER_ADDRESS_RESET'

export const getCustomerAddress = (params) => {
    return { type: GET_CUSTOMER_ADDRESS, params }
}

export const getCustomerAddressSuccess = (response) => {
    return { type: GET_CUSTOMER_ADDRESS_SUCCESS, response }
}

export const getCustomerAddressFail = (response) => {
    return { type: GET_CUSTOMER_ADDRESS_FAIL, response }
}

export const getCustomerAddressReset = () => {
    return { type: GET_CUSTOMER_ADDRESS_RESET }
}
