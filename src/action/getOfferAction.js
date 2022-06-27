export const GET_OFFER = 'GET_OFFER'
export const GET_OFFER_SUCCESS = 'GET_OFFER_SUCCESS'
export const GET_OFFER_FAIL = 'GET_OFFER_FAIL'
export const GET_OFFER_RESET = 'GET_OFFER_RESET'

export const getOffer = (params) => {
    return { type: GET_OFFER, params }
}

export const getOfferSuccess = (response) => {
    return { type: GET_OFFER_SUCCESS, response }
}

export const getOfferFail = (response) => {
    return { type: GET_OFFER_FAIL, response }
}

export const getOfferReset = () => {
    return { type: GET_OFFER_RESET }
}
