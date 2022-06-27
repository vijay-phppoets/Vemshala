export const ADD_CUSTOMER_ADDRESS = 'ADD_CUSTOMER_ADDRESS'
export const ADD_CUSTOMER_ADDRESS_SUCCESS = 'ADD_CUSTOMER_ADDRESS_SUCCESS'
export const ADD_CUSTOMER_ADDRESS_FAIL = 'ADD_CUSTOMER_ADDRESS_FAIL'
export const ADD_CUSTOMER_ADDRESS_RESET = 'ADD_CUSTOMER_ADDRESS_RESET'

export const addCustomerAddress = (params) => {
    return { type: ADD_CUSTOMER_ADDRESS, params }
}

export const addCustomerAddressSuccess = (response) => {
    return { type: ADD_CUSTOMER_ADDRESS_SUCCESS, response }
}

export const addCustomerAddressFail = (response) => {
    return { type: ADD_CUSTOMER_ADDRESS_FAIL, response }
}

export const addCustomerAddressReset = () => {
    return { type: ADD_CUSTOMER_ADDRESS_RESET }
}
