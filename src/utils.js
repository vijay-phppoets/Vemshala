import moment from "moment"

export const getCartId = () => {
    return localStorage.getItem('PikyCartId')
}

export const setCartId = (cart_id) => {
    return localStorage.setItem('PikyCartId', cart_id)
}

export const removeCartId = () => {
    return localStorage.removeItem('PikyCartId')
}

export const getToken = () => {
    return localStorage.getItem('PikyToken')
}

export const removeToken = () => {
    return localStorage.removeItem('PikyToken')
}

export const setToken = (token) => {
    return localStorage.setItem('PikyToken', token)
}
export const getCustomer = () => {
    return JSON.parse(localStorage.getItem('PikyCustomer'))
}
export const removeCustomer = () => {
    return localStorage.removeItem('PikyCustomer')
}

export const setCustomer = (customer) => {
    return localStorage.setItem('PikyCustomer', JSON.stringify(customer))
}

export const pad = (number, digits = 2, emptyDigit = 0) => {
    let length = 0;
    let n = Math.abs(number);
    let absoluteNumber = n;
    do {
        n /= 10;
        length++;
    } while (n >= 1);
    const prefix = Array(Math.max((digits - length) + 1, 0)).join(emptyDigit);
    return number < 0 ? `#-${prefix}${absoluteNumber}` : '#' + prefix + number;
}

export const dtFormat = (d) => {
    return moment(d).format("DD-MMM-YYYY  HH:mm A")
}


export const inr = (num) => {
    let n = parseFloat(num)
    let negativeNumber = false
    if (n < 0) {
        negativeNumber = true
        n = n * -1
    }
    var x = n.toString();
    var afterPoint = '';
    if (x.indexOf('.') > 0)
        afterPoint = x.substring(x.indexOf('.'), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint

    if (negativeNumber) {
        return "-" + res
    } else {
        return res
    }
}

export const getCurrency = () => {
    return localStorage.getItem('currencyType')
}

export const setCurrency = (currencyType) => {
    return localStorage.setItem('currencyType', currencyType)
}


export const getOfferStrip = () => {
    return localStorage.getItem('offerStrip')
}

export const setOfferStrip = (offerStrip) => {
    return localStorage.setItem('offerStrip', offerStrip)
}