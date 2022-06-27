export const DELETE_CUSTOMER_ADDRESS = 'DELETE_CUSTOMER_ADDRESS'
export const DELETE_CUSTOMER_ADDRESS_SUCCESS = 'DELETE_CUSTOMER_ADDRESS_SUCCESS'
export const DELETE_CUSTOMER_ADDRESS_FAIL = 'DELETE_CUSTOMER_ADDRESS_FAIL'
export const DELETE_CUSTOMER_ADDRESS_RESET = 'DELETE_CUSTOMER_ADDRESS_RESET'

export const deleteCustomerAddress = (params) => {
    return { type: DELETE_CUSTOMER_ADDRESS, params }
}

export const deleteCustomerAddressSuccess = (response) => {
    return { type: DELETE_CUSTOMER_ADDRESS_SUCCESS, response }
}

export const deleteCustomerAddressFail = (response) => {
    return { type: DELETE_CUSTOMER_ADDRESS_FAIL, response }
}

export const deleteCustomerAddressReset = () => {
    return { type: DELETE_CUSTOMER_ADDRESS_RESET }
}
