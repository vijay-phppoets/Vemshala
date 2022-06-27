import cnf from '../config'
import axios from 'axios'

export const checkCouponApi = async (params) => {

    const response = await axios({
        method: 'post',
        url: `${cnf.api.base_url}coupon/applyCoupon`,
        data: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    return response
}

export default checkCouponApi